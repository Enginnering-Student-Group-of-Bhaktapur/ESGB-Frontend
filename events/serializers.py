from re import L
from django.db.models import fields
from rest_framework import serializers
from .models import Event

class EventDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'slug', 'date_of_event', 'description', 'main_image', 'image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6', 'image_7', 'image_8', 'image_9', 'image_10')
        lookup_field = 'slug'

class EventMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'slug', 'description', 'main_image')
        lookup_field = 'slug'

class EventFeaturedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'slug', 'date_of_event','main_image')
        lookup_field = 'slug'