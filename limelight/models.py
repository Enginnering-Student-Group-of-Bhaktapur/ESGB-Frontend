from django.db import models
from django.utils.timezone import now

# Create your models here.
class Limelight(models.Model):
    """
        Description of LimeLight
    """
    theme = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to="limelight/thumbnail", blank=True, null=True)
    file = models.FileField(upload_to="limelight/", blank=False, null=False)
    year_published = models.DateField(blank=False, null=False)
    is_display = models.BooleanField(default=True)
    registered_date = models.DateTimeField(default=now, blank=False, null=False)
