from rest_framework import serializers
from .models import Limelight

class ListLimelightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Limelight
        fields = ('id', 'theme', 'image', 'file', 'year_published')
