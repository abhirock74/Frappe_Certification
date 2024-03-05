// Copyright (c) 2024, abhishek kumar and contributors
// For license information, please see license.txt
let _frm
frappe.ui.form.on("Parent Table", {
	refresh(frm) {
        console.log("heheeh")
        _frm = frm
        frm.fields_dict.table_uugd.grid.update_docfield_property("airplane", "options", ["hhhhh","hhhhhuuuuurr"]);
	},
    phone_no:function(frm){
        console.log("phone no")
        if(frm.doc.phone_no < 4){
            // console.log("less than 4")
            // frm.set_value("phone_no",'+91-')
        }
    }
});
const apply_filter_on_id_document = async (frm , filter_value) => {
    var child_table = frm.fields_dict['table_uugd'];
    // if (child_table) {
      console.log('event hit',filter_value);
      try {
        frm.set_query('airplane', 'table_uugd', () => {
          return {
              filters: {
                airline: filter_value
              }
          }
        })
        // child_table.get_field('airplane').get_query = function () {
        //   return {
        //     filters: [
        //       ['Airplane', 'airline', '=', filter_value]
        //     ]
        //   };
        // };
      } catch (error) {
        console.error(error)
      }
    }
  // }
// ********************* ID documents CHILD Table***********************
frappe.ui.form.on('Children table', {
    form_render: async function (frm, cdt, cdn) {
        console.log("hello")
    },
    table_uugd_add: async function (frm, cdt, cdn) {
      frm.fields_dict.table_uugd.grid.update_docfield_property("airplane", "options", ["hhhhh"]);
      // console.log("hello everyone")
      // apply_filter_on_id_document(frm)
    },
    airlines: async function (frm , cdt , cdn){
      let row = frappe.get_doc(cdt, cdn);
        // console.log("hello everyone", )
        // await apply_filter_on_id_document(frm , row.airlines)
      frm.refresh_field("table_uugd.airplane")
      frm.refresh_field("airplane")
    }
  })
  