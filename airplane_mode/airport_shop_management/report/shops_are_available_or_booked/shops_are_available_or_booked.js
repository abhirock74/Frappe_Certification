// Copyright (c) 2023, abhishek kumar and contributors
// For license information, please see license.txt

frappe.query_reports["shops are available or booked"] = {
	"filters": [
		{
			"fieldname": "airport",
			"fieldtype": "Link",
			"label": "Airoprt",
			"options":"Airport"
		}
	]
};
