from __future__ import unicode_literals
from django.db import models
from django.contrib import messages
import re

EMAIL_REGEX = re.compile (r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


# Create your models here.
class UserManager(models.Manager):
    def validation(self, email):
        if len(email)<1:
            print("Email Field can't be blank!")
        elif EMAIL_REGEX.match(email):
            return True
        else:
            return False


class Email(models.Model):
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # create
    userManager = UserManager()
