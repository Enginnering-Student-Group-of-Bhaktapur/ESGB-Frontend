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
    
    # error message when a wrong format entered
    phone_message = 'Phone number must be entered in the format: 98*-***-****' 

     # your desired format 
    phone_regex = RegexValidator(
        regex=r'^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$',
        message=phone_message
    )

    name = models.CharField(max_length=30, blank=False, null=False)
    faculty = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=30, blank=True, null=True)
    phone_number = models.CharField(validators=[phone_regex], max_length=12, null=True, blank=True)
    position = models.CharField(max_length=20, choices=PositionField.choices, blank=True, null=True)
    tenure_year = models.IntegerField(blank=True, null=True)
    image = models.ImageField(upload_to = 'members/', blank = False, null = False)
    batch = models.IntegerField(blank=True, null=True)
    is_present = models.BooleanField(default=True)
    is_executive_member = models.BooleanField(default=False)
    registered_date = models.DateTimeField(default=now, blank=False, null=False)

    def __str__(self):
        return self.name
    
    

