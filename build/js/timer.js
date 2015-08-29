//Дата, до которой ведется отсчет
var targetYear = 2016;
var targetMonth = 8; //месяцы отсчитываются от 0
var targetDay = 18;


var nowDate = new Date();

var targetDate = new Date(targetYear, targetMonth, targetDay);

var timeNow = nowDate.getHours();

function getLastDayOfMonth() {	
  var date = new Date(nowDate.getYear(), nowDate.getMonth() + 1, 0);
  return date.getDate();
}
var lastDay = getLastDayOfMonth();

var days = 24 * 60 * 60,
	hours = 60 * 60,
	month = (24 * 60 * 60 * 365) / 12;

var left = ((targetDate - nowDate) / 1000);

var m = Math.floor(left / month);
var d = (lastDay - nowDate.getDate());
var h = Math.floor(left / hours);

m += 1;
h -= (h - timeNow);

if (d < 10) {
  d = "0" + d;
}
if (m < 10) {
  m = "0" + m;
}
if (h < 10) {
  h = "0" + h;
}

if (m == 1) {
	m = 0;
	d = (targetDay - nowDate.getDate());
}


$(".timer").append(m + " Месяцев : " + d + " Дней : " + h + " Часа");