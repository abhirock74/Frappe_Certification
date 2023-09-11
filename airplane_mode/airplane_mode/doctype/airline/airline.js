// Copyright (c) 2023, abhishek kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Airline", {
	refresh(frm) {  
        if(frm.doc.website){
            frm.add_web_link(frm.doc.website)
        }
	},
    website: function(frm){
        frm.add_web_link(frm.doc.website)
    }

});
