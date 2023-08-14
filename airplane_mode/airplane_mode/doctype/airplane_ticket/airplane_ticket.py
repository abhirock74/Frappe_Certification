# Copyright (c) 2023, abhishek kumar and contributors
# For license information, please see license.txt

# import frappe

from frappe.model.document import Document
import random
import string

class AirplaneTicket(Document):

  def before_save(self):
        if self.status != 'Boarded':
            Add_ons = self.add_ons
            total_amount = self.flight_price

            for item in Add_ons:
                total_amount += item.amount

            self.total_amount = total_amount

            random_integer = random.randint(1, 100)
            random_letter = random.choice(string.ascii_uppercase[:5])
            seat = f"{random_integer}{random_letter}"  # Using f-string for formatting
            self.seat = seat
        else:
            return
