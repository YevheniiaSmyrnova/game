"""
Player api views module
"""
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, \
    RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from player.api.serializers import PlayerSerializer
from player.models import Player


class PlayerListCreateAPIView(ListCreateAPIView):
    """
    Player List and Create.
    """
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class PlayerRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    Retrieve, Update and Destroy player.
    """
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
