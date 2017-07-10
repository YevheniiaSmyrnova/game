"""
Record serializers module
"""
from rest_framework import serializers

from record.models import Record


class RecordSerializer(serializers.ModelSerializer):
    """
    Record serializer
    """
    class Meta:
        """
        Meta params
        """
        model = Record
        fields = ['player', 'game', 'record']
