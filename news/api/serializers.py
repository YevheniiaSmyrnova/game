"""
News serializers module
"""
from rest_framework import serializers

from news.models import News, Comment


class NewsSerializer(serializers.ModelSerializer):
    """
    News serializer
    """
    class Meta:
        """
        Meta params
        """
        model = News
        fields = ['id', 'news_title', 'news_text', 'news_date', 'news_like']


class CommentSerializer(serializers.ModelSerializer):
    """
    Comment serializer
    """
    class Meta:
        """
        Meta params
        """
        model = Comment
        fields = ['id', 'news', 'comment_text', 'comment_date', 'comment_like']
