// Copyright (c) 2023, abhishek kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Airplane Flight", {
	refresh(frm) {
   let data = frappe.call({
      method: 'airplane_mode.api.get_airport_gate',
      args: {
          // Pass any arguments to your function here
          airport: 'Delhi Airoprt',
      },
      freeze:true,
      freeze_message: __("Calling"),
      callback: function(response) {
          // Handle the response from the server here
          if (response.message) {
              // Access the data returned by your API
              console.log(response.message);
          } else {
              // Handle any errors
              console.error(response.exc);
          }
      }
  });

    // hide advance search and create new option in lists
    frm.set_df_property('airplane', 'only_select', true);
    frm.set_df_property('source_airport', 'only_select', true);
    frm.set_df_property('destination_airport', 'only_select', true);
    frm.set_df_property('pilot', 'only_select', true);
    frm.set_df_property('flight_attendants', 'only_select', true);
    frm.set_df_property('co_pilot', 'only_select', true);
    // //////////////////////////////////////////////////////////////////
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
                pilot_type: "Select Airplane First",
              },
            };
          },
          frm.fields_dict["co_pilot"].get_query = function (doc) {
            return {
              filters: {
                pilot_type: "Select Airplane First",
              },
            };
          },
          frm.fields_dict["flight_attendants"].get_query = function (doc) {
            return {
              filters: {
                airline: "Select Airplane First"
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
    },
    airplane:function(frm){
      // console.log("airplane", frm.doc.airline)
      // ///////////////////////////////////////////////////////////////////////
      frm.fields_dict["pilot"].get_query = function (doc) {
        return {
          filters: {
            pilot_type: "Captain",
            airlines: frm.doc.airline
          },
        };
      },
      // co-pilot
      frm.fields_dict["co_pilot"].get_query = function (doc) {
        return {
          filters: {
            pilot_type: "Co-pilot",
            airlines: frm.doc.airline
          },
        };
      },
      frm.fields_dict["flight_attendants"].get_query = function (doc) {
        return {
          filters: {
            airline: frm.doc.airline
          },
        };
      }
      
    }

});
