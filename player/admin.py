# -*- coding: utf-8 -*-
"""
Player admin module
"""
from django.contrib import admin

from player.models import Player


class PlayerAdmin(admin.ModelAdmin):
    """
    Player admin
    """
    fieldsets = [
        (u'Основная информация',
         {'fields': ['user',
                     'date_of_birth', 'gender']}),
        (u'Контактная информация',
         {'fields': ['email', 'phone', 'city', 'skype']}),
    ]
    list_display = ('user_full_name', 'email', 'skype')


admin.site.register(Player, PlayerAdmin)
