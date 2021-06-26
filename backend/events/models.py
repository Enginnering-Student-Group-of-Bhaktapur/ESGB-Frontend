from django.db import models
from django.db.models.base import Model
from django.db.models.fields import BLANK_CHOICE_DASH
from django.utils.timezone import now

class Event(models.Model):
    title = models.CharField(max_length=50, unique=True, blank=False)
    slug = models.CharField(max_length=50, unique=True, blank=False)
    date_of_event = models.DateTimeField(blank=False)
    description = models.TextField(blank=False)
    is_display = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    main_image = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = False)
    image_1 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_2 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_3 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_4 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_5 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_6 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_7 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_8 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_9 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    image_10 = models.ImageField(upload_to = 'events/%Y/%m/%d/', blank = True)
    registered_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.title

        
    
