from django.db import models
import os
from forminutesprj.settings import MEDIA_ROOT
# Create your models here.
class Meeting(models.Model):
    title = models.CharField(max_length=50)
    topic = models.TextField()
    writer = models.CharField(max_length=30)
    parties = models.TextField()
    meeting_date = models.DateTimeField()
    date = models.DateTimeField(auto_now=True)
    file = models.FileField(upload_to='audio/')
    photo = models.ImageField(upload_to='photo/', null=True, blank=True)

    def __str__(self):
        return self.title #자기 자신을 title로 표현

    def delete(self, *args, **kargs):
        if self.file:
            os.remove(os.path.join(MEDIA_ROOT, self.file.path))
        if self.photo:
            os.remove(os.path.join(MEDIA_ROOT, self.photo.path))
        super(Meeting, self).delete(*args, **kargs)

        
class Result(models.Model):
    meeting = models.OneToOneField(
        Meeting,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    script = models.TextField()

    def __str__(self):
        return self.meeting.title

class Summary_Result(models.Model):
    result = models.OneToOneField(
        Result,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    keyword = models.TextField(null=True, blank=True)
    summary = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.meeting.title