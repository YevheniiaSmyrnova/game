"""
Record api urls module
"""
from django.conf.urls import url
from record.api.views import RecordListCreateAPIView, \
    RecordRetrieveUpdateDestroyAPIView

urlpatterns = [
    url(r'^records/$', RecordListCreateAPIView.as_view(),
        name='records_list'),
    url(r'^records/(?P<pk>\d+)/$',
        RecordRetrieveUpdateDestroyAPIView.as_view(),
        name='record_detail'),
]
