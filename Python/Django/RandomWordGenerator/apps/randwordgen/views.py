from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

def index(request):
    try:
        request.session['counter']
    except KeyError:
        request.session['counter'] = 0
    return render(request,'randwordgen/index.html')

def generate(request):
    print(request.method)
    if request.method == "POST":
        request.session['counter']+=1
        request.session['uniqueid'] = get_random_string(length=32)
        print request.session['counter']
        return redirect('/')
    else:
        return redirect('/')


def reset(request):
    print(request.method)
    if request.method == "POST":
        request.session['counter'] = 0
        request.session['uniqueid'] = ""
        print request.session['counter']
        return redirect('/')
    return redirect('/')
