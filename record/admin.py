# -*- coding: utf-8 -*-
"""
Record admin module
"""
from django.contrib import admin

from record.models import Record


class RecordAdmin(admin.ModelAdmin):
    """
    Record admin
    """
    fieldsets = [
        (u'General information',
         {'fields': ['player',
                     'game', 'record']}),
    ]
    list_display = ('user_full_name', 'game', 'record')


admin.site.register(Record, RecordAdmin)
