# -*- coding: utf-8 -*-
"""
Record models module
"""
from __future__ import unicode_literals

from django.db import models
from player.models import Player


class Record(models.Model):
    """
    Record model
    """
    player = models.ForeignKey(Player, verbose_name='Player')
    game = models.CharField('Game',
                              choices=(('gallows', 'Gallows'), ('tic-tac-toe', 'Tic-Tac-Toe')),
                              max_length=15)
    record = models.PositiveSmallIntegerField('Record')

    def user_full_name(self):
        """
        Player full name
        :return: Player full name
        """
        return self.player.user_full_name()
