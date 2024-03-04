// Copyright (c) 2024, abhishek kumar and contributors
// For license information, please see license.txt
let _frm
frappe.ui.form.on("Parent Table", {
	refresh(frm) {
        console.log("heheeh")
        _frm = frm
	},
});
const apply_filter_on_id_document = async () => {
    //  APPLY Filter in ID DOCUMENT
    var child_table = _frm.fields_dict['table_uugd'].grid;
    if (child_table) {
      try {
        child_table.get_field('airplane').get_query = function () {
          return {
            filters: [
              ['Airplane', 'airline', 'IN', cur_frm.doc.table_uugd.map(function (item) {
                return item.airlines;
              })]
            ]
          };
        };
      } catch (error) {
        console.error(error)
      }
    }
  }
// ********************* ID documents CHILD Table***********************
frappe.ui.form.on('Children table', {
    form_render: async function (frm, cdt, cdn) {
        console.log("hello")
    },
    table_uugd_add: async function (frm, cdt, cdn) {
      console.log("hello everyone")
      apply_filter_on_id_document()
    },
    airlines: async function (frm , cdt , cdn){
        apply_filter_on_id_document()
    }
  })
  