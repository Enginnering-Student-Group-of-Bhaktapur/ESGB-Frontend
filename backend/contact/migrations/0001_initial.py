# Generated by Django 3.2.4 on 2021-06-26 03:16

import django.core.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=50)),
                ('phone', models.CharField(max_length=12, validators=[django.core.validators.RegexValidator(message='Phone number must be entered in the format: 98*-***-****', regex='^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$')])),
                ('message', models.TextField()),
                ('contact_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]