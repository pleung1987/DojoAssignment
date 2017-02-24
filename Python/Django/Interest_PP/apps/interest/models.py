from __future__ import unicode_literals

from django.db import models

class UserManager(models.Manager):
    def validate(self, postData):
        errors=[]
        if len(postData["name"])<1:
            errors.append("Name Field Can't be empty")
        if len(postData["interest"])<1:
            errors.append("Interest Field Can't be empty")
        if len(errors) == 0:
            newuser= User.objects.create(name= postData["name"])
            newinterest= Interest.objects.create(interest= postData["interest"])
            newuser.interest.add(newinterest)
            # newuser= newuser.interest.add(newinterest)
            return(True,newuser)
        else:
            return(False, errors)

# Create your models here.
class Interest(models.Model):
    interest=models.CharField(max_length=100)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

class User(models.Model):
    name= models.CharField(max_length=50)
    interest=models.ManyToManyField(Interest,related_name="common_interests")
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    objects= UserManager()
