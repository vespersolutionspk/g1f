// Copyright (c) 2021, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Plan Management Invoice', {
	// refresh: function(frm) {

	// }
});

/*frappe.ui.form.on("PM Invoice", {
   amount:function(frm, cdt, cdn){
   var d = locals[cdt][cdn];
   var total = 0;
   frm.doc.items.forEach(function(d) { total += d.amount; });
   frm.set_value("grand_total", total);
   refresh_field("grand_total");
 },
   pminvoice_remove:function(frm, cdt, cdn){
   var d = locals[cdt][cdn];
   var total = 0;
   frm.doc.items.forEach(function(d) { total += d.amount; });
   frm.set_value("grand_total", total);
   refresh_field("grand_total");
 },
    hours:function(frm, cdt, cdn){
    var d = locals[cdt][cdn];
    var totalh = 0;
    frm.doc.items.forEach(function(d) { totalh += d.hours; });
    frm.set_value("total_hours", totalh);
    refresh_field("total_hours");
  },
    pminvoice2_remove:function(frm, cdt, cdn){
    var d = locals[cdt][cdn];
    var totalh = 0;
    frm.doc.items.forEach(function(d) { totalh += d.hours; });
    frm.set_value("total_hours", totalh);
    refresh_field("total_hours");
  }


});*/

frappe.ui.form.on("PM Invoice", {
	hourly_rate: function(frm, cdt, cdn) {
		var d = locals[cdt][cdn];
		var total = 0;
		frappe.model.set_value(d.doctype, d.name, "total_amount", d.hours * d.hourly_rate);
        frm.doc.items.forEach(function(d) { total += d.total_amount; });
        frm.set_value('grand_total', total);
	},
  hourly_rateremove: function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
    var total = 0;
    frappe.model.set_value(d.doctype, d.name, "total_amount", d.hours * d.hourly_rate);
        frm.doc.items.forEach(function(d) { total += d.total_amount; });
        frm.set_value('grand_total', total);
  },
  hours:function(frm, cdt, cdn){
  var d = locals[cdt][cdn];
  var totalh = 0;
  frm.doc.items.forEach(function(d) { totalh += d.hours; });
  frm.set_value("total_hours", totalh);
  refresh_field("total_hours");
},
  pminvoice2_remove:function(frm, cdt, cdn){
  var d = locals[cdt][cdn];
  var totalh = 0;
  frm.doc.items.forEach(function(d) { totalh += d.hours; });
  frm.set_value("total_hours", totalh);
  refresh_field("total_hours");
}
});
