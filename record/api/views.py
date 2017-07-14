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

    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.serializer_class(
            instance=instance, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(data=serializer.errors,
                            status=HTTP_400_BAD_REQUEST)
        instance = serializer.save()
        response = RecordSerializer(instance=instance).data
        return Response(status=HTTP_200_OK, data=response)
