//Дата, до которой ведется отсчет
var targetYear = 2016;
var targetMonth = 8; //месяцы отсчитываются от 0
var targetDay = 18;
var hText = " Часа";

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

if ((d >= 1) && (d < 10)) {
  d = "0" + d;
}
if (d == 0) {
  d += 19;
}
if (nowDate.getDate() == 18) {
  d = "00";
}

if (m < 10) {
  m = "0" + m;
}


if ((h >= 1) && (h < 10)) {
  if (h == 1) {
    hText = " Час"
  }
  h = "0" + h

} else if ((h == 0) || (h > 5) && h < 21) {
  hText = " Часов"
} else if (h > 21) {
  hText = " Часа"
}

if (m == 1) {
  m = 0;
  d = (targetDay - nowDate.getDate());
}

$(".timer").append(m + " Месяцев : " + d + " Дней : " + h + hText);


/***** Clock block top animation *****/

topheight =$(".usltop").height(); 

$(window).scroll(function() 
{
   if ($(window).scrollTop() >= (topheight - 40) ) {
     $('.clockcont').css({"padding-top" : "60px" });
   } else {
    $('.clockcont').css({"padding-top" : "0" });
   }
  
});
