from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def DojoSurvey():
    return render_template("DojoSurvey.html")

@app.route('/users', methods=['POST'])
def create_user():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template("Results.html", name= name, location= location, language = language, comment= comment)
app.run(debug=True) # run our server
