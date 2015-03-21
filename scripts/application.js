(function($) {
  var MONTHS     = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var DAYS       = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var TODAY      = new Date();
  var KARDASHIAN = 72;

  function trunc(n){
    return ~~n;
  }

  function day(n){
    return DAYS[n];
  }

  function month(n){
    return MONTHS[n];
  }

  function next_kanniv_date(n){
    var next_kanniv_day   = n.getDay();
    var next_kanniv_month = n.getMonth();
    var next_kanniv_date  = n.getDate();

    return day(next_kanniv_day) + ', ' + month(next_kanniv_month) + ' ' + next_kanniv_date;
  }

  function diff_in_days(n){
    return Math.floor((TODAY - n) / 86400000);
  }

  var find_the_kardashian = function(event){
    event.preventDefault();

    var start_date        = new Date($('#datepicker').val());
    var days_until_kanniv = diff_in_days(start_date) % KARDASHIAN;
    var kanniv            = trunc(diff_in_days(start_date) / KARDASHIAN);
    var next_kanniv       = TODAY.advance({ day: days_until_kanniv });

    var line1 = "You have been together for " + kanniv + " Kardashians.\n\n";
    var line2 = "Your " + (kanniv + 1) + " Kardashian anniversary is in " + days_until_kanniv + " days, on " + next_kanniv_date(next_kanniv) +  ".";

    alert(line1 + line2);
  }

  $(function(){
    $("#datepicker").datepicker({
      clearBtn: true,
      todayHighlight: true
    });

    $('#calculate').on('click', find_the_kardashian);
  });
})(window.jQuery);
