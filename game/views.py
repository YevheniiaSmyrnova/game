# -*- coding: utf-8 -*-
"""
Main views module
"""
from django.contrib import messages
from django.core.urlresolvers import reverse_lazy
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import TemplateView


class IndexView(TemplateView):
    """
    Main page
    """
    template_name = 'index.html'


class NotFoundView(TemplateView):
    """
    404 page
    """
    template_name = '404.html'


class RegisterCreateView(CreateView):
    """
    User registration
    """
    form_class = UserCreationForm
    success_url = reverse_lazy('index')
    template_name = "register.html"

    def form_valid(self, form):
        """
        The successful registration of new user
        :param form:
        :return: message
        """
        message = super(RegisterCreateView, self).form_valid(form)
        mes = u'Вы успешно зарегистрировались.'
        messages.success(self.request, mes)
        return message
