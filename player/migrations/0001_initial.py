# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-31 10:59
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_birth', models.DateField(verbose_name='\u0414\u0435\u043d\u044c \u0420\u043e\u0436\u0434\u0435\u043d\u0438\u044f')),
                ('gender', models.CharField(choices=[('M', '\u041c\u0443\u0436\u0441\u043a\u043e\u0439'), ('F', '\u0416\u0435\u043d\u0441\u043a\u0438\u0439')], max_length=15, verbose_name='\u041f\u043e\u043b')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('phone', models.CharField(blank=True, max_length=15, null=True, verbose_name='\u0422\u0435\u043b\u0435\u0444\u043e\u043d')),
                ('address', models.CharField(blank=True, max_length=55, null=True, verbose_name='\u0410\u0434\u0440\u0435\u0441')),
                ('skype', models.CharField(blank=True, max_length=55, null=True, verbose_name='Skype')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c')),
            ],
        ),
    ]
