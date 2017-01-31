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
    user = models.OneToOneField(User, verbose_name=u'Пользователь')
    date_of_birth = models.DateField(u'День Рождения')
    gender = models.CharField(u'Пол',
                              choices=(('M', u'Мужской'), ('F', u'Женский')),
                              max_length=15)
    email = models.EmailField('Email')
    phone = models.CharField(u'Телефон', max_length=15, null=True, blank=True)
    address = models.CharField(u'Адрес', max_length=55, null=True, blank=True)
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
