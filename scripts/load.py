import csv
import os
from aboutus.models import Member
from events.models import Event

def run():
    # Uploading the member data
    member_file = open('/media/nirajan/1C067838067814CC1/data/member.csv')
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
    event_file = open('/media/nirajan/1C067838067814CC1/data/event_data.csv')
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
    
    
