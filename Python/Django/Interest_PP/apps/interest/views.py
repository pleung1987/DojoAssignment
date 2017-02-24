from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
from .models import Interest
# Create your views here.
def index(request):
    return render(request, "interest/index.html")

def process(request):
# if there is request.Post, then route to success. else it should redirect with validation
    if request.method != 'POST':
        return redirect('/')
    else:
        user_valid = User.objects.validate(request.POST)
        print "user_valid", user_valid
        if user_valid[0] == True:
            return redirect('/success')
        else:
            for msg in user_valid[1]:
                messages.add_message(request,messages.INFO, msg)
            return redirect('/')

def success(request):
    user= User.objects.all()
    context={
        "user": user
    }
    return render(request, 'interest/success.html',context)

def show(request, id):
    print 80*"*"
    interest= Interest.objects.get(id=id)
    user= User.objects.get(id=id)
    print "interest", interest
    print 80*"*"
    context={
        "interest" : interest,
        "user":user
    }
    return render(request, 'interest/interest.html', context)

def remove(request,id):
    print 80*"*"
    if request.method=="POST":
        print 80*"*"
        User.objects.filter(id=id).delete()
        return redirect('/success')
