# -*- coding: utf-8 -*-
"""
Main views module
"""
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
