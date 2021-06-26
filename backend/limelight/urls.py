from django.urls import path
from .views import ListLimelightView

urlpatterns = [
    path('', ListLimelightView.as_view()),
]