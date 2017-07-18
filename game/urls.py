"""game URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.views import login, logout

from game.views import IndexView, NotFoundView, RegisterCreateView
from rest_framework_swagger.views import get_swagger_view


schema_view = get_swagger_view(title='API', url='/')
urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^api/', include('player.api.urls', namespace="player_api_urls")),
    url(r'^api/', include('record.api.urls', namespace="record_api_urls")),
    url(r'^api/', include('news.api.urls', namespace="news_api_urls")),
    url(r'^swagger/', schema_view),
    url(r'^register/$', RegisterCreateView.as_view(), name='register'),
    url(r'^login/$', login, {"template_name": "login.html"}, name='login'),
    url(r'^logout/$', logout, {"template_name": "logout.html"}, name='logout'),
    url(r'^player/', include('player.urls', namespace="player")),
    url(r'^404/$', NotFoundView.as_view(), name='404'),
    url(r'^admin/', admin.site.urls),
]
