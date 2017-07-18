"""
News models module
"""
from __future__ import unicode_literals
import datetime

from django.db import models
from django.utils import timezone


class News(models.Model):
    """
    News model
    """
    news_title = models.CharField('News title', max_length=200)
    news_text = models.TextField('News text')
    news_date = models.DateTimeField('Date published', auto_now_add=True)
    news_like = models.PositiveSmallIntegerField('Like', default=0)

    def __unicode__(self):
        """
        News title
        :return: News title
        """
        return self.news_title


class Comment(models.Model):
    """
    Comment model
    """
    news = models.ForeignKey(News)
    comment_text = models.TextField('Comment text')
    comment_date = models.DateTimeField('Date published', auto_now_add=True)
    comment_like = models.PositiveSmallIntegerField('Like', default=0)

    def __unicode__(self):
        """
        News title
        :return: News title
        """
        return self.news.news_title