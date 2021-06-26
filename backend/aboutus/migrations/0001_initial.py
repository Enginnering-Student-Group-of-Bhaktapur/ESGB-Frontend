# Generated by Django 3.2.4 on 2021-06-26 02:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('position', models.CharField(choices=[('President', 'President'), ('Vice President', 'Vice President'), ('Secretary', 'Secretary'), ('Joint Secretary', 'Joint Secretary'), ('Treasurer', 'Treasurer')], max_length=20)),
                ('tenure_year', models.IntegerField()),
                ('image', models.ImageField(upload_to='members/')),
                ('is_present', models.BooleanField(default=True)),
                ('registered_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]