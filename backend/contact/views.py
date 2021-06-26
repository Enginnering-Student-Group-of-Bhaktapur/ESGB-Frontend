from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from rest_framework.response import Response

from .serializers import ContactSerializer

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def post(self, request, format=None):
        data = self.request.data
        serializer = ContactSerializer(data = data)

        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'Message Sent Successfully'})
        else:
            return Response({'error': 'Message Failed to sent'})
