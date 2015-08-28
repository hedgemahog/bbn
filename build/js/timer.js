var nowDate = new Date();
var targetDate = new Date(2016, 8, 18);

var days = 24*60*60,
	hours = 60*60,
	month = (24*60*60*365)/12;

var left = ((targetDate - nowDate)/1000);

var m = Math.floor(left/month);
var d = Math.floor(left/days);
var h = Math.floor(left/hours);

var daysx = Math.floor(d/12);

if (daysx > 31) {
  m += 1;
  daysx = Math.floor(daysx - 31);
}

$(".timer").append( m + " Месяцев : " + daysx + " Дней : " + (h/hours) + " Часа" );