# Generated by Django 3.2.4 on 2021-06-26 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='date_of_event',
            field=models.DateField(),
        ),
    ]