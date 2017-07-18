"""
News admin module
"""
from django.contrib import admin

from news.models import News, Comment


class CommentInline(admin.TabularInline):
    """
    Comment to the news
    """
    model = Comment
    extra = 1


class NewsAdmin(admin.ModelAdmin):
    """
    News admin
    """
    fieldsets = [
        (None,                {'fields': ['news_title', 'news_text']}),
        ('Other information', {'fields': ['news_like'], 'classes': ['collapse']}),
    ]
    inlines = [CommentInline]
    list_display = ('news_title', 'news_date')

admin.site.register(News, NewsAdmin)
