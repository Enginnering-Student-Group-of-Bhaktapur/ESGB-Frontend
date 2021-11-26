from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import Member
from .serializers import MemberListSerializer, TableMemberListSerializer
from rest_framework.pagination import PageNumberPagination

from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 1000

class ListingMemberView(ListAPIView):
    queryset = Member.objects.order_by('registered_date').filter(is_present = True, is_executive_member=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class  = MemberListSerializer
    lookup_field = 'id'

class TableListingMemberView(ListAPIView):
    queryset = Member.objects.order_by('batch')
    permission_classes = (permissions.AllowAny, )
    serializer_class = TableMemberListSerializer
    lookup_field = 'id'
    pagination_class = StandardResultsSetPagination

# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()

    
