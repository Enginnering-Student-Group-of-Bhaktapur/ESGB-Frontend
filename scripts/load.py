import csv
import os
from aboutus.models import Member

def run():
    file = open('/media/nirajan/1C067838067814CC1/data/member.csv')
    read_file = csv.reader(file)

    Member.objects.all().delete()

    count = 1

    for record in read_file:
        if count == 1:
            pass
        else:
            batch = record[0]
            faculty = record[1]
            name = record[2]
            email = record[3]
            current_address = record[4]
            permanent_address = record[5]
            contact_1 = record[6]
            contact_2 = record[7]
            Member.objects.create(name = name, batch = batch, faculty = faculty, email = email, address = current_address, phone_number_1 = contact_1, phone_number_2 = contact_2, position = "Member")            
        count += 1
