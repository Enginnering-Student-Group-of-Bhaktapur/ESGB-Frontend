from functools import partial
from django.urls import path
from .views import ListingMemberView, TableListingMemberView

urlpatterns = [
    path('', ListingMemberView.as_view()), ## For listing Executive members
    path('memberlist/', TableListingMemberView.as_view()),
]