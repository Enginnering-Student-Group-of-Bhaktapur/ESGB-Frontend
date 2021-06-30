from django.contrib import admin
from .models import Member

class MemberAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'batch','faculty', 'email', 'address', 'phone_number', 'position','is_present','is_executive_member', 'tenure_year')
    list_display_links = ('id', 'name')
    list_editable = ('is_present', 'is_executive_member', )
    list_filter = ('is_present', 'is_executive_member')
    search_fields = ('name', 'position')
    list_per_page = 30

admin.site.register(Member, MemberAdmin)