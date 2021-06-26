from django.contrib import admin
from .models import Limelight

# Register your models here.
class LimelightAdmin(admin.ModelAdmin):
    list_display = ('id', 'theme', 'is_display','year_published', 'registered_date')
    list_display_links = ('id', 'theme')
    list_editable = ('is_display', )
    list_per_page = 30

admin.site.register(Limelight, LimelightAdmin)