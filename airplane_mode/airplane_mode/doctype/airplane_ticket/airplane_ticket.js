// Copyright (c) 2023, abhishek kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Airplane Ticket", {
	refresh(frm) {
        frm.add_custom_button(__("Assign Seat"), function(){
            frappe.prompt([
                {
                    label: __("Seat Number"),
                    fieldname: "seat",
                    fieldtype: "Data",
                    reqd: true
                }
            ], function(values) {
                let seat = values["seat"];
                console.log(seat);
                frm.set_value('seat', seat);

                // frm.doc.seat = seat;
                frm.refresh_field('seat');
            }, __("Assign Seat"), __("Assign"));
          }, __("Actions"));
	},
});
