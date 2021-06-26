from django.db import models
from django.utils.timezone import now
from django.core.validators import RegexValidator

class Contact(models.Model):
    # error message when a wrong format entered
    phone_message = 'Phone number must be entered in the format: 98*-***-****' 

     # your desired format 
    phone_regex = RegexValidator(
        regex=r'^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$',
        message=phone_message
    )

    name = models.CharField(max_length=30, null=False, blank=False)
    email = models.EmailField(max_length=50, null=False, blank=False)
    phone = models.CharField(validators=[phone_regex], max_length=12, null=False, blank=False)
    message = models.TextField(null=False, blank=False)
    contact_date = models.DateTimeField(default=now)

    def __str__(self):
        return self.name
