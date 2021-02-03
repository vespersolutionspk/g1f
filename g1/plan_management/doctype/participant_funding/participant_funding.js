// Copyright (c) 2021, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on("Participant Funding", "total_delivered_f", function(frm){
    //
});


frappe.ui.form.on("Plan Budget", {
   budget_allocation:function(frm, cdt, cdn){
   var b = locals[cdt][cdn];
   var totala = 0;
   frm.doc.plan_budget.forEach(function(b) { totala += b.budget_allocation; });
   frm.set_value("total_allocation", totala);
   refresh_field("total_allocation");
 },
   plan_budget_remove:function(frm, cdt, cdn){
   var b = locals[cdt][cdn];
   var totala = 0;
   frm.doc.plan_budget.forEach(function(b) { totala += b.budget_allocation; });
   frm.set_value("total_allocation", totala);
   refresh_field("total_allocation");
 }


});

frappe.ui.form.on("Service Support", {
  rate: function(frm, cdt, cdn) {
   var f = locals[cdt][cdn];
   var total = 0;
   frappe.model.set_value(f.doctype, f.name, "total1", f.quantity * f.rate);
        frm.doc.service_support.forEach(function(f) { total += f.total1; });
        frm.set_value("total_delivered", total);
        refresh_field("total_delivered");
 },
    rateremove: function(frm, cdt, cdn) {
    var f = locals[cdt][cdn];
    var total = 0;
    frappe.model.set_value(f.doctype, f.name, "total1", f.quantity * f.rate);
        frm.doc.service_support.forEach(function(f) { total += f.total1; });
        frm.set_value("total_delivered", total);
        refresh_field("total_delivered");
  }
});

frappe.ui.form.on("Delivered Services", {
   total_amount:function(frm, cdt, cdn){
   var b = locals[cdt][cdn];
   var totala = 0;
   frm.doc.delivered_services.forEach(function(b) { totala += b.total_amount; });
   frm.set_value("total_delivered_a", totala);
   refresh_field("total_delivered_a");
 },
 total_amount_remove:function(frm, cdt, cdn){
 var b = locals[cdt][cdn];
 var totala = 0;
 frm.doc.delivered_services.forEach(function(b) { totala += b.total_amount; });
 frm.set_value("total_delivered_a", totala);
 refresh_field("total_delivered_a");
 }
});
