from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.decorators import *

from .serializer import *
from .models import *


@api_view(["GET"])
def getAllNotes(request):
    notes = Note.objects.all()
    serilizer = NoteSerializer(notes, many=True)
    return Response(serilizer.data)


@api_view(["GET"])
def getNote(request, id):
    note = get_object_or_404(Note, id=id)
    return Response(NoteSerializer(note).data)


@api_view(["PATCH"])
def updateNote(request, id):
    data = request.data
    note = get_object_or_404(Note, id=id)
    serilizer = NoteSerializer(instance=note, data=data)

    if serilizer.is_valid():
        serilizer.save()
    print(serilizer.__dict__)
    return Response(serilizer.data)


@api_view(["DELETE"])
def deleteNote(request, id):
    note = get_object_or_404(Note, id=id)
    note.delete()
    return Response("status-code: 200")


@api_view(["POST"])
def createNote(request):
    data = request.data
    serializer = NoteSerializer(data=data)
    if serializer.is_valid():
        serializer.save()

    return Response(f"Note created : {serializer.data}")
