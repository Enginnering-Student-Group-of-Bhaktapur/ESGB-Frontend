from django.contrib import admin
from .models import Member

class MemberAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'position', 'tenure_year', 'image', 'is_present')
    list_display_links = ('id', 'name')
    list_editable = ('is_present', )
    search_fields = ('name', 'position')
    list_per_page = 30

admin.site.register(Member, MemberAdmin)