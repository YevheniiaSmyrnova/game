"""
News api views module
"""
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, \
    RetrieveUpdateDestroyAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from news.api.serializers import NewsSerializer, \
    CommentSerializer
from news.models import News, Comment


class NewsListCreateAPIView(ListCreateAPIView):
    """
    News List and Create.
    """
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NewsRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    Retrieve, Update and Destroy news.
    """
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.serializer_class(
            instance=instance, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(data=serializer.errors,
                            status=HTTP_400_BAD_REQUEST)
        instance = serializer.save()
        response = NewsSerializer(instance=instance).data
        return Response(status=HTTP_200_OK, data=response)


class CommentListCreateAPIView(ListCreateAPIView):
    """
    Comment List and Create.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        """
        List of comments to the news
        :return:
        """
        return Comment.objects.filter(
            news = self.kwargs.get(self.lookup_field))
