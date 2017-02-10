from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

# Function for Counting, secret_key tells you that the browser cookies belong to you.

@app.route('/')
def index():
    try:
        session['counter'] = session['counter']+1
    except KeyError: #if variable not initiliazed, this error will appread, label a drawer in  session called 'counter'
        session['counter'] = 0
    return render_template("index.html")

@app.route('/', methods=['POST'])
def clicked():
    if request.form['button'] == "add":
        session['counter'] = session['counter'] + 2
    elif request.form['button'] == "clear":
        session['counter'] = 1
    return render_template('index.html')

app.run(debug=True)
