from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import Member
from .serializers import MemberListSerializer

class ListingMemberView(ListAPIView):
    queryset = Member.objects.order_by('registered_date').filter(is_present = True)
    permission_classes = (permissions.AllowAny, )
    serializer_class  = MemberListSerializer
    lookup_field = 'id'

