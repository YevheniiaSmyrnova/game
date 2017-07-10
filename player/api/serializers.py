"""
Player serializers module
"""
from rest_framework import serializers

from player.models import Player


class PlayerSerializer(serializers.ModelSerializer):
    """
    Player serializer
    """
    class Meta:
        """
        Meta params
        """
        model = Player
        fields = ['user', 'date_of_birth', 'gender', 'email', 'phone', 'city', 'skype']
