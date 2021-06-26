from django.db import models
from django.utils.timezone import now

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
    
    name = models.CharField(max_length=30, blank=False, null=False)
    position = models.CharField(max_length=20, choices=PositionField.choices, blank=False, null=False)
    tenure_year = models.IntegerField(blank=False, null=False)
    image = models.ImageField(upload_to = 'members/', blank = False, null = False)
    is_present = models.BooleanField(default=True)
    registered_date = models.DateTimeField(default=now, blank=False, null=False)

    def __str__(self):
        return self.name
    
    

