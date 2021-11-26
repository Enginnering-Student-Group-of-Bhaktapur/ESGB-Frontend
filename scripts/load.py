import csv
import os
from aboutus.models import Member
from events.models import Event
from esgb import settings

def run():
    # Uploading the member data
    file_path = os.path.join(settings.BASE_DIR, 'initial_data/member.csv')  
    member_file = open(file_path)
    read_member_file = csv.reader(member_file)

    Member.objects.all().delete()

    count = 1

    for record in read_member_file:
        if count == 1:
            pass
        else:
            batch, faculty, name, email, current_address, permanent_address, contact_1, contact_2 = record
            Member.objects.create(name = name, batch = batch, faculty = faculty, email = email, address = current_address, phone_number_1 = contact_1, phone_number_2 = contact_2, position = "Member")            
        count += 1

    # Uploading the member data
    file_path = os.path.join(settings.BASE_DIR, 'initial_data/event_data.csv')  
    event_file = open(file_path)
    read_event_file = csv.reader(event_file)

    Event.objects.all().delete()

    count = 1

    for record in read_event_file:
        if count == 1:
            pass
        else:
            date, name, venue, category, description = record
            Event.objects.create(title = name, slug = name, date_of_event = date, venue = venue, category = category, description = description)
        count += 1
    
    
