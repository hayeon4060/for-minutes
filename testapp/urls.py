from django.urls import path,include
from .api import *
import testapp.views

from .views import MeetingViewSet, ResultViewSet, Summary_ResultViewSet

urlpatterns = [
    path('meeting', MeetingViewSet.as_view({
        'get': 'list'
    })),
    path('meeting/create', MeetingViewSet.as_view({
        'post': 'create'
    })),
    path('meeting/<int:pk>', MeetingViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update'
    })),
    path('meeting/delete/<int:pk>', MeetingViewSet.as_view({
        'delete': 'destroy'
    })),

    path('result', ResultViewSet.as_view({
        'get': 'list'
    })),
    path('result/create/<int:pk>', ResultViewSet.as_view({
        'post': 'create'
    })),
    path('result/<int:pk>', ResultViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update'
    })),

    path('result/delete/<int:pk>', ResultViewSet.as_view({
        'delete': 'destroy'
    })),

    path('summary', Summary_ResultViewSet.as_view({
        'get': 'list'
    })),
    path('summary/create/<int:pk>', Summary_ResultViewSet.as_view({
        'post': 'create'
    })),

    path('summary/<int:pk>', Summary_ResultViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update'
    })),

    path('summary/delete/<int:pk>', Summary_ResultViewSet.as_view({
        'delete': 'destroy'
    })),
]