# Copyright (c) 2023, Management System for Agrasarteach@suvaidyam.com and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
    # frappe.errprint(filters.get('airport'))
    columns = [
        {
            "fieldname": "status",
            "label": "Status",
            "fieldtype": "int",
            "width": 200
        },
        {
            "fieldname": "Count",
            "label": "Count",
            "fieldtype": "int",
            "width": 200
        }
    ]

    if filters:
        airport = filters.get('airport')
        airport = frappe.db.escape(airport)
        condition_str = f"WHERE airport = {airport}"
    else:
        condition_str = ""
        
    sql_query = f"""
SELECT
  'Available' AS status,
  SUM(CASE WHEN status = 'Available' THEN 1 ELSE 0 END) AS Count
FROM tabShop
{condition_str}
UNION
SELECT
  'Booked' AS status,
  SUM(CASE WHEN status = 'Booked' THEN 1 ELSE 0 END) AS Count
FROM tabShop
{condition_str};
"""
    data = frappe.db.sql(sql_query, as_dict=True)
    return columns, data
