from django.db import models
from django.utils.timezone import now
from django.core.validators import RegexValidator

class Member(models.Model):
    """
        Description of the executive members
    """
    class PositionField(models.TextChoices):
        President = "President"
        Vice_President = "Vice President"
        Secretary = "Secretary"
        Joint_Secretary = "Joint Secretary"
        Treasurer = "Treasurer"

    name = models.CharField(max_length=200, blank=True, null=True)
    batch = models.IntegerField(blank=True, null=True)
    faculty = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(max_length=60, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    phone_number_1 = models.CharField(max_length=30, null=True, blank=True)
    phone_number_2 = models.CharField(max_length=30, null=True, blank=True)
    position = models.CharField(max_length=20, choices=PositionField.choices, blank=True, null=True)
    tenure_year = models.IntegerField(blank=True, null=True)
    image = models.ImageField(upload_to = 'members/', blank = True, null = True)
    is_present = models.BooleanField(default=True)
    is_executive_member = models.BooleanField(default=False)
    registered_date = models.DateTimeField(default=now, blank=False, null=False)

    def __str__(self):
        return self.name
    
    

