from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    if "num" not in session:
        session["num"] = random.randrange(1,101)
        print session["num"] #to check on server what your random number is
    elif session["num"] == session["guess"]:
        session.pop("num")
        session.pop("guess")
        session.pop("response")
        return redirect("/")
    return render_template("index.html")

@app.route('/logic', methods =["POST"])
def logic():
    session["guess"] = int(request.form['guess'])
    if int(session['num']) == session["guess"] :
        session['response'] = str(session['num']) + " was right! You got it Right!"
        return redirect("/repeat")
    elif int(session['num']) < session["guess"] :
        session['response'] =  "Too High, Try a bit Lower"
    elif int(session['num']) > session["guess"] :
        session['response'] =  "Too Low, Try a bit Higher"
    return redirect('/')

@app.route('/repeat')
def repeat():
    return render_template("index.html")

app.run(debug=True)
