from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Event
from .serializers import EventDetailSerializer, EventFeaturedSerializer, EventMediaSerializer

class EventMediaView(ListAPIView):
    queryset = Event.objects.order_by('-registered_date').filter(is_display = True, is_featured = False)
    permission_classes = (permissions.AllowAny, )
    serializer_class = EventMediaSerializer
    lookup_field = 'slug'

class EventFeaturedView(ListAPIView):
    queryset = Event.objects.order_by('-registered_date').filter(is_featured = True, is_display = True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = EventFeaturedSerializer
    lookup_field = 'slug'

class EventDetailView(RetrieveAPIView):
    queryset = Event.objects.order_by('-registered_date').filter(is_display = True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = EventDetailSerializer
    lookup_field = 'slug'
