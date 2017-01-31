"""
Player urls module
"""
from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from player.views import PlayerDetailView, PlayerUpdateView

urlpatterns = [
    url(r'^(?P<pk>\w+)/$', login_required(PlayerDetailView.as_view()), name='detail'),
    url(r'^edit/(?P<pk>\w+)/$',
        login_required(PlayerUpdateView.as_view()), name='edit'),
]
