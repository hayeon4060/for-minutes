from rest_framework import generics
from rest_framework.response import Response
from .serializer import MeetingSerializer
from .serializer import ResultSerializer
from .serializer import Summary_ResultSerializer
from .models import Meeting, Result, Summary_Result
