"""
Player api urls module
"""
from django.conf.urls import url
from player.api.views import PlayerListCreateAPIView, \
    PlayerRetrieveUpdateDestroyAPIView

urlpatterns = [
    url(r'^players/$', PlayerListCreateAPIView.as_view(),
        name='players_list'),
    url(r'^player/(?P<pk>\d+)/$',
        PlayerRetrieveUpdateDestroyAPIView.as_view(),
        name='player_detail'),
]
