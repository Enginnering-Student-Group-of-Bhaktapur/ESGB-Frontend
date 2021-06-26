from django.contrib import admin
from .models import Event

# Register your models here.
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'date_of_event', 'is_display', 'is_featured', 'registered_date')
    list_display_links = ('id','title')
    list_filter = ('is_display', 'is_featured')
    list_editable = ('is_display', 'is_featured')
    search_fields = ('title', )
    list_per_page = 30

admin.site.register(Event, EventAdmin)