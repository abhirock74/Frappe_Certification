// Copyright (c) 2023, abhishek kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Airplane Flight", {
	refresh(frm) {
        console.log("new")
        frm.fields_dict["destination_airport"].get_query = function (doc) {
            return {
              filters: {
                name: "please select Current state",
              },
            };
          }
	},
    source_airport:function(frm){
        frm.fields_dict["destination_airport"].get_query = function (doc) {
            return {
              filters: {
                name: ['!=', frm.doc.source_airport]
              },
            };
          }
    }
});
