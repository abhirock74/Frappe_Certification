// Copyright (c) 2024, abhishek kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Parent Table", {
	refresh(frm) {
        console.log("heheeh")
	},
});
const apply_filter_on_id_document = async () => {
    //  APPLY Filter in ID DOCUMENT
    var child_table = _frm.fields_dict['table_uugd'].grid;
    if (child_table) {
      try {
        child_table.get_field('which_of_the_following_id_documents_do_you_have').get_query = function () {
          return {
            filters: [
              ['ID Document', 'document', 'NOT IN', cur_frm.doc.id_table_list.map(function (item) {
                return item.which_of_the_following_id_documents_do_you_have;
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
    //   apply_filter_on_id_document()
    }
  })
  