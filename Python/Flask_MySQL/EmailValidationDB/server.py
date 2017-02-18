from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
mysql = MySQLConnector(app,'emailval')
app.secret_key = 'validateEmail'

emailRegex = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():                           # define your query
    email = mysql.query_db("SELECT * FROM EmailVal" )                           # run query with query_db()
    return render_template('index.html')

@app.route('/emails/<email_id>')
def show(email_id):
    query= "SELECT * FROM EmailVal WHERE id = :specific_id"
    data = {"specific_id":email_id}
    emails = mysql.query_db(query,data)
    return render_template("index.html", one_email=emails[0])

@app.route('/process', methods=['POST'])
def process():

    if str(request.form['email']) == '':
        flash('Email cannot be blank', 'emailError')
        return redirect('/')
    elif not emailRegex.match(request.form['email']):
        flash('Invalid email address', 'emailError')
        return redirect('/')
    else:
        #add an email to the database!
        print request.form['email']
        query = "INSERT INTO EmailVal (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
                                                                                        # We'll then create a dictionary of data from the POST data received.
        data = {
                 'email': request.form['email'],
               }
        mysql.query_db(query,data)
        query = "SELECT * FROM EmailVal"
        email = mysql.query_db(query)
    return render_template('success.html', all_emails= email)
app.run(debug=True)


# How to do Regex rules for email and password
# emailRegex = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# passwordRegex = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$')
