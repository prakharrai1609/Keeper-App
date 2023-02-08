from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("notes/", getAllNotes),
    path("note/<str:id>/", getNote),
    path("update/<str:id>/", updateNote),
    path("delete/<str:id>/", deleteNote),
    path("create/", createNote),
]
