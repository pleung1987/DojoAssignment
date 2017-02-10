from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key= "string"

@app.route('/')
def DojoSurvey():
    return render_template("index.html")

@app.route('/results', methods=['POST'])
def create_user():
    if len(request.form['name']) < 1:
        flash("You Need to input a name")
        return redirect("/")
    print "name flash activate"

    if len(request.form['comment']) > 10:
        flash("Cannot Write more than 10 words!")
        return redirect("/")
    print "comment flash activate"

    name = request.form['name']
    location = request.form['location']
    language = request.form['lang']
    comment = request.form['comment']
    return render_template("results.html", name= name, location= location, language = language, comment= comment)

app.run(debug=True) # run our server
