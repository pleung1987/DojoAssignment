from flask import Flask, request, redirect, render_template, session, flash
import re
app = Flask(__name__)
app.secret_key = 'validateEmail'

emailRegex = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
passwordRegex = re.compile(r'^[A-Z]$')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    email = request.form['email']
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    password = request.form['password']
    confirm_password = request.form['confirm_password']

    if len(first_name) < 1 or len(last_name) <1:
        flash("Name too short!")
    if len(email) < 1:
        flash("Email too short!")
    if len(password) < 8:
        print "password 8 letter activated"
        flash ("password needs to be more than 8 characters")
    if request.form['confirm_password'] != request.form['password']:
        print "confirm password flash activated"
        flash("Make sure confirm password is same as password!")
    # Validation
    if not emailRegex.match(request.form['email']):
        print "email flash activated"
        flash("invalid email.")
    if not request.form['first_name'].isalpha():
        print "first name flash activated"
        flash("First Name can only be alphabets")
    if not request.form['last_name'].isalpha():
        print "last name flash activated"
        flash("Last Name can only be alphabets")
    if not passwordRegex.match(request.form['password'])<1:
        print "password flash activated"
        flash("Password must contain atleast one captial letter")
    return redirect('/')
    # return render_template("results.html", email= email, first_name= first_name, last_name = last_name, password= password, confirm_password= confirm_password)

app.run(debug=True) # run our server
