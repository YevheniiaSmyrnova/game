"""
Record api views module
"""
import django_filters.rest_framework
from django.shortcuts import render
from rest_framework.generics import ListAPIView, ListCreateAPIView, \
    RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from record.api.serializers import RecordSerializer
from record.models import Record


class RecordListCreateAPIView(ListCreateAPIView):
    """
    Record List and Create.
    """
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_fields = ('player', 'game')


class RecordRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    Retrieve, Update and Destroy record.
    """
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
