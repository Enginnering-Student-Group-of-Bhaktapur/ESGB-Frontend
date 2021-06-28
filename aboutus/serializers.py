from django.db import models
from rest_framework import serializers
from .models import Member

class MemberListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id','name', 'position', 'image')
        lookup_fields = 'id'

class TableMemberListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id','name', 'batch', 'faculty', 'email', 'address', 'position')
        lookup_fields = 'id'