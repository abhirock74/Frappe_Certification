# Copyright (c) 2023, abhishek kumar and contributors
# For license information, please see license.txt

import frappe
import random
import string

from frappe.model.document import Document

class AirplaneTicket(Document):

    def before_save(self):
        if self.status != 'Boarded':
            Add_ons = self.add_ons
            total_amount = self.flight_price

            unique_add_ons = set()
            for items in Add_ons:
                if items.item in unique_add_ons:
                    frappe.throw(items.item +" "+" item alredy added")
                else:
                    unique_add_ons.add(items.item)
                    total_amount += items.amount
                        # frappe.throw("item alredy added")
            # print(unique_add_ons)

            self.total_amount = total_amount
            # seat code heare
            random_integer = random.randint(1, 100)
            random_alphabet = random.choice(string.ascii_uppercase[:5])
            seat = str(random_integer) + random_alphabet
            self.seat = seat
        else:
            frappe.throw("Flight is Boarded")
            return



    def before_insert(self):
            # check seat is full or not
            flight = frappe.get_doc('Airplane Flight', self.flight)
            airplane = frappe.get_doc('Airplane', flight.airplane)
            booking_count = frappe.db.count('Airplane Ticket', {'flight': self.flight})
            if booking_count >= airplane.capacity:
                frappe.throw('Seat not available in this flight. Check another one :)')
                return