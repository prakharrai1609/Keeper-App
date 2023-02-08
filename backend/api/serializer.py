from rest_framework.serializers import ModelSerializer
from .models import *


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = "__all__"
