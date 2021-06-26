from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import Limelight
from .serializers import ListLimelightSerializer

class ListLimelightView(ListAPIView):
    queryset = Limelight.objects.order_by('-registered_date').filter(is_display = True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListLimelightSerializer
    lookup_field = 'id'