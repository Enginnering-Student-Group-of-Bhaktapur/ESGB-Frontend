from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import Limelight
from .serializers import ListLimelightSerializer

from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

class ListLimelightView(ListAPIView):
    queryset = Limelight.objects.order_by('-registered_date').filter(is_display = True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListLimelightSerializer
    lookup_field = 'id'

# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()