# -*- coding: utf-8 -*-
"""
Player models module
"""
from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models


class Player(models.Model):
    """
    Player model
    """
    user = models.OneToOneField(User, verbose_name='User')
    date_of_birth = models.DateField('Date of birth')
    gender = models.CharField('Gender',
                              choices=(('M', 'Male'), ('F', 'Female')),
                              max_length=15)
    email = models.EmailField('Email')
    phone = models.CharField('Phone', max_length=15, null=True, blank=True)
    city = models.CharField('City', max_length=55, null=True, blank=True)
    skype = models.CharField('Skype', max_length=55, null=True, blank=True)

    def __unicode__(self):
        """
        Player name
        :return: Player name
        """
        return self.user.get_username()

    def user_full_name(self):
        """
        Player full name
        :return: Player full name
        """
        return self.user.get_full_name()
