// Copyright (c) 2023, abhishek kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Airplane Ticket", {
	refresh(frm) {
        frm.add_custom_button(__("Assign Seat"), function(){
            frappe.prompt({
                label: __("Assign  Seat"),
                fieldname: "seat",
                fieldtype: "Data",
                reqd: true,
                primary_action: function(value) {
                    // This function will be called when the "OK" button is clicked
                    console.log(value);
                    frm.doc.seat = value;
                    frm.refresh_field('seat'); // Refresh the UI for the seat field
                    frappe.hide_msgprint(); // Close the dialog
                },
                primary_action_label: __("Assign")
            });
            frm.doc.seat= seat;
            frm.refresh_field('seat');
          }, __("Actions"));
	},
});
