"""
News api urls module
"""
from django.conf.urls import url
from news.api.views import NewsListCreateAPIView, \
    NewsRetrieveUpdateDestroyAPIView, \
    CommentListCreateAPIView, \
    CommentRetrieveUpdateDestroyAPIView

urlpatterns = [
    url(r'^news/$', NewsListCreateAPIView.as_view(),
        name='news_list'),
    url(r'^news/(?P<pk>\d+)/$', NewsRetrieveUpdateDestroyAPIView.as_view(),
        name='news_detail'),
    url(r'^news/(?P<pk>\d+)/comment/$', CommentListCreateAPIView.as_view(),
        name='comments_list'),
    url(r'^comment/(?P<pk>\d+)/$', CommentRetrieveUpdateDestroyAPIView.as_view(),
        name='comment_detail'),
]
