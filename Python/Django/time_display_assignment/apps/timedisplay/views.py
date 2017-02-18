from django.shortcuts import render, HttpResponse
from datetime import datetime

def index(request):
    timenow= datetime.now()
    now = {
    "somekey":timenow
    }
    return render(request,'timedisplay/index.html', now)
