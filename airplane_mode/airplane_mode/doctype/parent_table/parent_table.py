# Copyright (c) 2024, abhishek kumar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ParentTable(Document):
	def validate(self):
		# publish ing events 
		frappe.publish_realtime('update_progress', {
			'progress': 42,
			'total': 100
		})

