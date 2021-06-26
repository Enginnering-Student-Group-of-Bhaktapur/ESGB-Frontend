from functools import partial
from django.urls import path
from .views import ListingMemberView

urlpatterns = [
    path('', ListingMemberView.as_view()),
]