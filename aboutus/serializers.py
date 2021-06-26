from rest_framework import serializers
from .models import Member

class MemberListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('name', 'position', 'image')
        lookup_fields = 'id'