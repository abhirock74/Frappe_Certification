# Copyright (c) 2023, abhishek kumar and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class AirplaneTicket(Document):
	def before_save(self):
		if self.status != 'Boarded':
			Add_ons = self.Add_ons
			total_amount = self.flight_price

			for item in Add_ons:
				total_amount += item.amount
			
			self.total_amount = total_amount
		else:
			return
			
