# -*- coding: utf-8 -*-
"""
Collector views module
"""
from django.contrib import messages
from django.core.urlresolvers import reverse_lazy

from django.views.generic.detail import DetailView
from django.views.generic.edit import UpdateView

from player.models import Player


class PlayerDetailView(DetailView):
    """
    Detail about player
    """
    model = Player

    def get_context_data(self, **kwargs):
        """
        Extends context data
        :param kwargs:
        :return: context
        """
        context = super(PlayerDetailView, self).get_context_data(**kwargs)
        return context


class PlayerUpdateView(UpdateView):
    """
    Edit information about player
    """
    model = Player
    fields = ['user', 'date_of_birth', 'gender', 'email', 'phone', 'address', 'skype']

    def get_success_url(self):
        """
        Get success url
        :return: get success url
        """
        return reverse_lazy('player:detail', kwargs={'pk': self.object.pk})

    def get_context_data(self, **kwargs):
        """
        Extends context data
        :param kwargs:
        :return: context
        """
        context = super(PlayerUpdateView, self).get_context_data(**kwargs)
        context['page_title'] = u'Редактирование моих данных '
        return context

    def form_valid(self, form):
        """
        The successful edition of player
        :param form:
        :return: message
        """
        message = super(PlayerUpdateView, self).form_valid(form)
        mes = u'Данные изменены.'
        messages.success(self.request, mes)
        return message
