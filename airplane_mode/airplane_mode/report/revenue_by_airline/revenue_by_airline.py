# Copyright (c) 2023, abhishek kumar and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	columns, data = [
		{
			"fieldtype":"Link",
			"fieldname":"airline",
			"options":"Airline",
			"label":"Airline"
		},
		{
			"fieldtype":"Currency",
			"fieldname":"revenue",
			"options":"currency",
			"label":"Revenue",
			"currency": "INR"
		}
    ], []

	data = frappe.db.sql("""
		select
			a.airline,
   			sum(total_amount) as revenue,
			'INR' as currency
		from
			`tabAirplane Ticket` at
		inner join `tabAirplane Flight` af on af.name = at.flight
		inner join `tabAirplane` a on a.name = af.airplane
		group by a.airline
    """, as_dict=1)

	chart = {
		"type":"pie",
  		"data":{
			"labels": [
				d.airline for d in data
			],
			"datasets": [
       			{
					"name": '',
					"values": [d.revenue for d in data]
				}
          	]
		}
	}
	total_revenue = sum(d.revenue for d in data)
	report_summary = [
		{
			"value": total_revenue,
			"indicator": "Green" if total_revenue > 10000 else "Red",
			"label": "Total Revenue",
			"datatype": "Currency",
			"currency": "INR"
		}
    ]

	return columns, data, None, chart, report_summary
