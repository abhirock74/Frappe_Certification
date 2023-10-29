import frappe
from frappe import _

@frappe.whitelist(allow_guest = True)
def get_airport_gate(airport = None):
    # gate = frappe.db.get_list("Airoprt Gate")
    if airport:
        query = f"SELECT gate_no FROM `tabAiroprt Gate` WHERE parent = '{airport}'" 
    else:
        query = f"SELECT gate_no FROM `tabAiroprt Gate`"

    gate = frappe.db.sql(query , as_dict=True)
    result_tuple = tuple(row["gate_no"] for row in gate)

    return result_tuple
