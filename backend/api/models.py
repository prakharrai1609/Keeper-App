from django.db import models


class Note(models.Model):
    title = models.TextField(default="My note")
    body = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
