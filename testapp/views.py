import json
from django.shortcuts import render, get_object_or_404, redirect
from .models import Meeting, Result, Summary_Result
from .stt import *
from .summary import *
from forminutesprj.settings import MEDIA_ROOT
from testapp.api import *

from .serializer import MeetingSerializer,ResultSerializer, Summary_ResultSerializer
from rest_framework import viewsets

from .keyword import *

# list detail update delate
class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

    def create(self,request,pk):
        meeting = get_object_or_404(Meeting, pk=pk)
        result = Result()
        audio = "media/"+str(meeting.file)
        
        res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
        data = json.loads(res.text)
            
        result.script = data['text'].replace('.', '.\n')
        result.meeting = meeting
        result.save()
        return redirect('/testapp/result/' + str(meeting.id))


class Summary_ResultViewSet(viewsets.ModelViewSet):
    queryset = Summary_Result.objects.all()
    serializer_class = Summary_ResultSerializer

    def create(self, request, pk):
        result = get_object_or_404(Result, pk=pk)
        summary_result = Summary_Result()

        script = result.script
        word = Krwordrank.wordrank([script])

        summary_result.summary = self.split_summary(script)
        summary_result.keyword = word
        summary_result.result = result
        summary_result.save()
        return redirect('/testapp/summary/' + str(result.pk))

    def split_summary(self, contents):
        WORDS = 1999
        summary = ""
        for i in range((len(contents)//WORDS)+1):
            res = ClovaSummary().req(contents[WORDS*i:WORDS*(i+1)])
            rescode = res.status_code
            if(rescode == 200):
                summary += json.loads(res.text)["summary"]
            else:
                print("Error : " + res.text)
                
        if (len(contents)//WORDS) > 0:
            res = ClovaSummary().req(summary)
            rescode = res.status_code
            if(rescode == 200):
                summary = json.loads(res.text)["summary"]
            else:
                print("Error : " + res.text)

        return summary