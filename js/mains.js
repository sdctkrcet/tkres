$('.selectize-single').selectize({sortField: 'text'});
	$('.selectize-multiple').selectize({
		delimiter: ',',
		persist: false,
		create: function (input) {
		return {value: input, text: input};
	}
});

$(function() {
	$(document).on("click",".datepicker",function(){
		$(this).datepicker({
			todayHighlight:true,
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			changeYear: true,
			yearRange: '1945:'+(new Date).getFullYear(),
			autoclose:true
		}).datepicker("show");
	});
});

$(document).ready(function () {
	$("#quantity, #rate, #total, #misc, #taxit").on('keyup',function(event){
		var totals =  $("#quantity").val() * $("#rate").val();
		var n1 = parseInt($('#total').val());
		var n2 = parseInt($('#misc').val());
		var gtotals = n1 + n2;
		var satds = gtotals - (gtotals * $("#taxit").val() / 100);
		$("#total").val(totals);
		$("#gtotal").val(gtotals);
		$("#atds").val(satds);
	});
});

$('body').on('keydown', 'input, select', function(e) {
	if (e.key === "Enter") {
		var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
		focusable = form.find('input,a,select,button,textarea').filter(':visible');
		next = focusable.eq(focusable.index(this)+1);
			if (next.length) {
			next.focus();
			} else {
			form.submit();
			}
		return false;
	}
});