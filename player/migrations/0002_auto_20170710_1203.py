# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-10 12:03
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='address',
        ),
        migrations.AddField(
            model_name='player',
            name='city',
            field=models.CharField(blank=True, max_length=55, null=True, verbose_name='City'),
        ),
        migrations.AlterField(
            model_name='player',
            name='date_of_birth',
            field=models.DateField(verbose_name='Date of birth'),
        ),
        migrations.AlterField(
            model_name='player',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=15, verbose_name='Gender'),
        ),
        migrations.AlterField(
            model_name='player',
            name='phone',
            field=models.CharField(blank=True, max_length=15, null=True, verbose_name='Phone'),
        ),
        migrations.AlterField(
            model_name='player',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='User'),
        ),
    ]