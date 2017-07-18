# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-18 08:48
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_text', models.TextField(verbose_name='Text')),
                ('comment_date', models.DateTimeField(auto_now_add=True, verbose_name='Date published')),
                ('comment_like', models.PositiveSmallIntegerField(default=0, verbose_name='Like')),
            ],
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('news_title', models.CharField(max_length=200, verbose_name='Title')),
                ('news_text', models.TextField(verbose_name='Text')),
                ('news_date', models.DateTimeField(auto_now_add=True, verbose_name='Date published')),
                ('news_like', models.PositiveSmallIntegerField(default=0, verbose_name='Like')),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='news',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='news.News'),
        ),
    ]
