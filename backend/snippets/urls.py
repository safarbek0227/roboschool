from django.urls import path
from .import views

app_name = "main"
urlpatterns = [
    path('api', views.TodoListApiView.as_view()), 
]