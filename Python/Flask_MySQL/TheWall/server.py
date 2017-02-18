from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re
app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app,'thewall')
app.secret_key = 'climbthewall'


emailRegex = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
passwordRegex =  re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$')

def invalid(email, first_name, last_name, password):
    errors= False
    if len(first_name) < 1 or len(last_name) <1:
        flash("Name too short!")
        errors = True
    if len(email) < 1:
        flash("Email too short!")
        errors = True
    if len(password) < 8:
        print "password 8 letter activated"
        flash ("password needs to be more than 8 characters")
        errors = True
    if request.form['confirm_password'] != request.form['password']:
        print "confirm password flash activated"
        flash("Make sure confirm password is same as password!")
        errors = True
    # Validation
    if not emailRegex.match(request.form['email']):
        print "email flash activated"
        flash("invalid email.")
        errors = True
    if not request.form['first_name'].isalpha():
        print "first name flash activated"
        flash("First Name can only be alphabets")
        errors = True
    if not request.form['last_name'].isalpha():
        print "last name flash activated"
        flash("Last Name can only be alphabets")
        errors = True
    if not passwordRegex.match(request.form['password']):
        print "password flash activated"
        flash("Password must contain atleast one captial letter and umber")
        errors = True
    return errors

@app.route('/')
def index():
    if 'id' in session:
        print "current id in session", session['id']
    else:
        print "no session"
    all_users= mysql.query_db("SELECT * FROM users")
    return render_template("index.html", all_users= all_users)

@app.route('/login', methods= ['POST'])
def login():
    all_users= mysql.query_db("SELECT * FROM users")
    for i in all_users:
        if i['email'] == request.form['email']:
            print i['email']
            if bcrypt.check_password_hash(i['password'], request.form['password']):
                print "password match"
                session['id'] = i['id']
                return redirect('/success')
    # email = request.form["email"]
    # password = request.form["password"]
    # query = "SELECT * FROM users"
    # user = mysql.query_db(query)
    # if bcrypt.check_password_hash(user[0]['pw_hash'], password):
    #     session['user'] = user[0]['id']
    #     return redirect('/success')
    # else:
    flash("incorrect email or password, Please try again")
    return redirect('/')

@app.route('/logout', methods= ['POST'])
def logout():
    session.pop('id')
    return redirect('/')

@app.route('/register', methods=['POST'])
def register():
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    email = request.form["email"]
    password = request.form["password"]
    if password:
        pw_hash = bcrypt.generate_password_hash(password)
    else:
        pw_hash = ""
    confirm_password= request.form["confirm_password"]
    errors= False
    # Write query as a string. Notice how we have multiple values
    # we want to insert into our query.
    query = "INSERT INTO users(email, first_name, last_name, password, created_at, updated_at) VALUES (:email, :first_name, :last_name,:password, NOW(), NOW())"
    # We'll then create a dictionary of data from the POST data received.
    data = {
             'email': email,
             'first_name': first_name,
             'last_name':  last_name,
             'password':bcrypt.generate_password_hash(request.form["password"]),
           }
    errors = invalid(first_name, last_name, email, password)
    if errors:
        print "error happens"
        return redirect('/')
    if not errors:
        print "no errors happen"
        session['id']= mysql.query_db(query, data)
    return redirect('/success')

@app.route('/success')
def success():
    if "id" in session:
        query= "SELECT * FROM users WHERE id={}".format(session['id'])
        username = mysql.query_db(query)[0]['first_name']
        fetchquery= "SELECT users.id, users.first_name, users.last_name, messages.id, messages.message, messages.created_at FROM users Join messages ON users.id=  messages.user_id ORDER BY created_at DESC;"
        allmessages= mysql.query_db(fetchquery)
        print allmessages
        # for message in allmessages:
        #     message['created_at'] = message['created_at'].strftime('%B %d %Y')

        commentquery = "SELECT users.first_name, users.last_name, comments.comment, comments.created_at, comments.message_id FROM users JOIN comments ON users.id = comments.user_id ORDER BY created_at ASC;"
        allcomments= mysql.query_db(commentquery)
        # for comment in allcomments:
        #     comment['created_at'] = comment['created_at'].strftime('%B %d %Y')
        print"got all comment", allcomments
        return render_template("wall.html", username= username, msgs= allmessages, comments=allcomments)
    else:
        flash("Please log in to continue.")
        return redirect('/')

@app.route('/create_message', methods=['POST'])
def createmessage():
    userinput= request.form['message']
    if len(userinput)>0:
        insert_query= "INSERT INTO messages(message, created_at,  updated_at, user_id) VALUES (:userinput, Now(), NOW(),:id);"
        data = {
            'userinput': userinput,
            'id':session['id']
        }
        mynewmessageid = mysql.query_db(insert_query,  data)
        print "got the new message id", mynewmessageid
    else:
        print "nothing in the input field"
    return redirect('/success')

@app.route('/create_comment', methods= ['POST'])
def createcomment():
    print "Made a comment", request.form
    insert_query= "INSERT INTO comments(comment, user_id, message_id,  created_at, updated_at) VALUES (:comment, :userid, :messageid, NOW(), NOW());"
    data={
        'comment': request.form['comment'],
        'userid': session['id'],
        'messageid': request.form['msgid']
    }
    mysql.query_db(insert_query,data)
    return redirect('/success')

app.run(debug=True) # run our server
