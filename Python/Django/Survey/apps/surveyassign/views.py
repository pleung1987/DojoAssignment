from django.shortcuts import render, redirect

def index(request):
    return render(request,'surveyassign/index.html')

def result(request):
    return render(request,'surveyassign/result.html')

def process(request):
    print(request.method)
    if request.method == "POST":
        print('*'*50)
        print('*'*50)
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        if 'counter' not in request.session:
            request.session['counter'] = 0
        request.session['counter']= request.session['counter'] + 1
        return redirect('/result')

def page(request):
    if request.method == "GET":
        print('*'*50)
        print(request.method)
        print('*'*50)
        return render(request, 'surveyassign/index.html')
