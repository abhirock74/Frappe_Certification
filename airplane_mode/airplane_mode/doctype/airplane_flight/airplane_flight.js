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
          },
          frm.fields_dict["pilot"].get_query = function (doc) {
            return {
              filters: {
                pilot_type: "Captain",
              },
            };
          },
          frm.fields_dict["co_pilot"].get_query = function (doc) {
            return {
              filters: {
                pilot_type: "Co-pilot",
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
