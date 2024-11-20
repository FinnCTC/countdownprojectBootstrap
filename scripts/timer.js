/* set the date for timer end */
var endDate = new Date("May 1, 2026 12:00:00").getTime();

/* update count every second */
var x = setInterval(function() {

    /* get curent date */
    var curDate = new Date().getTime();

    /* get the distance between end and cur date */
    var distance = endDate - curDate;

    /* Time calculations for years, days, hours, minutes, and seconds */
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    /* display countdown */
    document.getElementById("countdown").innerHTML = days + " Days " + " | " + hours + " Hours " + " | " + minutes + " Minutes " + " | " + seconds + " Seconds ";

    /* display when the countdown is over */
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "MOVIE IS OUT";
        }
    }, 1000);