var KARDASHIAN = 72;

$(function(){
	$("#datepicker").datepicker({maxDate: "+0D" });
});

$(function(){
	$('#datepicker').change(function(){
		var start_date = new Date($('#datepicker').val());
		
		alert(start_date);
	});
});