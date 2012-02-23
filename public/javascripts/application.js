var KARDASHIAN = 72;

$(function(){
	$("#datepicker").datepicker({maxDate: "+0D" });
});

$(function(){
	$('#datepicker').change(function(){
		var start_date = new Date($('#datepicker').val());
		var diff =  Math.floor((new Date() - start_date) / 86400000);
		var days_until_kanniv = diff % KARDASHIAN;
		var kanniv = trunc(diff / KARDASHIAN);
		alert("You have been together for " + kanniv + " Kardashians.\nYou have " + days_until_kanniv + " days until your " + (kanniv + 1) + " Kardashian anniversary.");
	});
});

function trunc(n){
   return ~~n;
}
