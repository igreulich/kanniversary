var KARDASHIAN = 72;
var TODAY      = new Date();
var MONTHS     = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var DAYS       = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function trunc(n){
  return ~~n;
}

function day(n){
  return DAYS[n];
}

function month(n){
  return MONTHS[n];
}

$(function(){
  $("#datepicker").datepicker({maxDate: "+0D" });
});

$(function(){
  $('#datepicker').change(function(){
    var start_date        = new Date($('#datepicker').val());
    var diff              =  Math.floor((TODAY - start_date) / 86400000);
    var days_until_kanniv = diff % KARDASHIAN;
    var kanniv            = trunc(diff / KARDASHIAN);
    var next_kanniv       = TODAY.advance({ day: days_until_kanniv });
    
    var next_kanniv_day   = next_kanniv.getDay();
    var next_kanniv_month = next_kanniv.getMonth();
    var next_kanniv_date  = next_kanniv.getDate();
    
    var kanniv_date_pretty = day(next_kanniv_day) + ', ' + month(next_kanniv_month) + ' ' + next_kanniv_date;
    
    var line1 = "You have been together for " + kanniv + " Kardashians.\n\n";
    var line2 = "Your " + (kanniv + 1) + " Kardashian anniversary is on " + kanniv_date_pretty +  ".\n\n";
    var line3 = "You have " + days_until_kanniv + " days until your " + (kanniv + 1) + " Kardashian anniversary.";
    
    alert(line1 + line2 + line3);
  });
});