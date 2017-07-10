# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-10 12:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('player', '0002_auto_20170710_1203'),
    ]

    operations = [
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game', models.CharField(choices=[('gallows', 'Gallows'), ('tic-tac-toe', 'Tic-Tac-Toe')], max_length=15, verbose_name='Game')),
                ('record', models.PositiveSmallIntegerField(verbose_name='Record')),
                ('player', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='player.Player', verbose_name='Player')),
            ],
        ),
    ]
