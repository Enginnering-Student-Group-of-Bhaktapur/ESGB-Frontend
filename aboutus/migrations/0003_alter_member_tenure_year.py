# Generated by Django 3.2.4 on 2021-07-04 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aboutus', '0002_auto_20210628_1613'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='tenure_year',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
