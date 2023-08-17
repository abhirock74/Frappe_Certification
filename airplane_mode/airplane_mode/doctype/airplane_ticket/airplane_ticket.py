# Copyright (c) 2023, abhishek kumar and contributors
# For license information, please see license.txt

import frappe

from frappe.model.document import Document

class AirplaneTicket(Document):
    # def validate(self):
    #     flight = frappe.get_doc("Airplane Flight", self.airplane)
    #     airplane = frappe.get_doc("Airplane", flight.airplane)

    #     booked_tickets = frappe.get_all(
    #         "Airplane Ticket",
    #         filters={"flight": self.flight, "docstatus": 1},
    #         fields=["name"],
    #     )

    #     if len(booked_tickets) >= airplane.capacity:
    #         frappe.throw("Airplane is already fully booked for this flight.")


    def before_save(self):
        if self.status != 'Boarded':
            Add_ons = self.add_ons
            total_amount = self.flight_price

            for item in Add_ons:
                total_amount += item.amount

            self.total_amount = total_amount
        else:
            return
