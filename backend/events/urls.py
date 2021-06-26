from django.urls import path
from .views import EventDetailView, EventFeaturedView, EventMediaView

urlpatterns = [
    path('recent/', EventMediaView.as_view()),
    path('featured/', EventFeaturedView.as_view()),
    path('<slug>/', EventDetailView.as_view()),
]