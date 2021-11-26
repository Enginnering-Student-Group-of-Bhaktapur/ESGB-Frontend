from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import ContactSerializer

from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def post(self, request, format=None):
        data = self.request.data
        serializer = ContactSerializer(data = data)

        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'Message Sent Successfully'})
        else:
            print(serializer.errors)
            return Response(serializer.errors)

# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()