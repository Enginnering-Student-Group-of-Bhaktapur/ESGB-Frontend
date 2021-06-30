from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import Member
from .serializers import MemberListSerializer, TableMemberListSerializer

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
    