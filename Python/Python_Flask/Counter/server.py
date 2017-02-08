from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

# Function for Counting
def counting():
    try:
        session['counter'] = session['counter']+1
    except KeyError: #if variable not initiliazed, this error will appread
        session['counter'] = 0

@app.route('/')
def indexpage():
    counting()
    return render_template("index.html")

@app.route('/', methods=['POST'])
def clicked():
    if request.form['button'] == "add":
        session['counter'] = session['counter'] + 2
    elif request.form['button'] == "clear":
        session['counter'] = 1
    return render_template('index.html')

app.run(debug=True)
