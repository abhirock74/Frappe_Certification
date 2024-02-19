// Copyright (c) 2024, abhishek kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student Demo", {
	refresh(frm) {
        console.log(frm)
        const tour_name = 'Creating Custom Fields';
        frm.tour
          .init({ tour_name })
          .then(() => frm.tour.start());
        },
});
frappe.tour['Student Demo'] = [
	{
		fieldname: "english_marks",
		title: "Item Code",
		description: __("Enter an Item Code, the name will be auto-filled the same as Item Code on clicking inside the Item Name field.")
	},
	{
		fieldname: "maths_marks",
		title: "Item Group",
		description: __("Select an Item Group.")
	},
];