from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import Email

# Create your views here.
def index(request):
    return render(request, 'emailvalidation/index.html')

def process(request):
    if Email.userManager.validation(request.POST['email']):
        Email.userManager.create(email= request.POST['email'])
        print("Valid Email")
        messages.success(request, 'The email address you entered ('+ request.POST['email'] + ') is a VALID address. Thank You!')
        print("Success")
        return redirect ('/success')
    else:
        print("Invalid Email")
        messages.warning(request, "Invalid Email")
        return redirect('/')

def success(request):
    email= Email.userManager.all()
    context = {
        'emails': email
    }
    return render(request,'emailvalidation/success.html', context)

def delete(request, id):
    context={
        "email": Email.userManager.get(id=id)
    }
    return render(request,'emailvalidation/delete.html',context)

def remove(request, id):
    if request.method=="POST":
        if request.POST['submit']== "YES":
            Email.userManager.get(id=id).delete()
            return redirect('/success')
        elif request.POST['submit'] =="NO":
            return redirect('/success')
