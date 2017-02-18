from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')
app.secret_key = 'fulliofriends'

def invalid(first_name, last_name, email):
    errors = False
    if len(first_name) < 1 or len(last_name) <1:
        flash("Name too short!")
        errors = True
    if len(email) < 1:
        flash("Email too short!")
        errors= True
    # Validation
    if not re.search(r"^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$", email):
        flash("invalid email.")
        errors= True
    if not (re.search(r"^[^0-9]*$", first_name) and re.search(r"^[^0-9]*$", last_name)):
        flash("Name cannot contain number")
        errors= True
    return errors

@app.route('/')
def index():                           # define your query
    friends = mysql.query_db("SELECT * FROM friends" )                           # run query with query_db()
    return render_template('index.html', all_friends=friends)

@app.route('/friends', methods=['POST'])
def create():
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    email = request.form["email"]
    errors= False
    # Write query as a string. Notice how we have multiple values
    # we want to insert into our query.
    query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW())"
    # We'll then create a dictionary of data from the POST data received.
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'email': request.form['email']
           }
    errors = invalid(first_name, last_name, email)
    if not errors:
        mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/edit')
def edit(id):
    print "Edit"
    target = mysql.query_db("SELECT id, first_name, last_name, email, updated_at FROM friends WHERE id=:id", {"id":id})
    return render_template('edit.html', friend= target)

@app.route('/friends/<id>', methods=['POST'])
def update(id):
    print request.form
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    query = ("UPDATE friends SET first_name=:first_name, last_name=:last_name, email=:email, updated_at=NOW() WHERE id="+id)
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'email': request.form['email']
           }
    if not invalid(first_name, last_name, email):
        mysql.query_db(query, data)
        flash ("saved changes successfully")
        return redirect('/')
    else:
        redir= '/friends/'+id+'/edit'
        return redirect(redir)

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
    print "Delete"
    mysql.query_db("DELETE FROM friends WHERE id= :id", {"id":id})
    return redirect('/')

app.run(debug=True)
