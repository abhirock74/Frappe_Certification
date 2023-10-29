import frappe
from frappe import _

@frappe.whitelist(allow_guest = True)
def get_airport_gate(airport = None):
    # gate = frappe.db.get_list("Airoprt Gate")
    if airport:
        query = f"SELECT gate_no, parent FROM `tabAiroprt Gate` WHERE parent = '{airport}'" 
    else:
        query = f"SELECT gate_no, parent FROM `tabAiroprt Gate`"
    gate = frappe.db.sql(query , as_dict=True)
    return gate
