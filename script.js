// accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// counter

var count = document.querySelector(".count");
var followers = document.querySelector(".followers");

let number = 1;

setInterval(() => {
    if (number < 1000) {
        number++;
        count.innerText = number;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers On Instagram";
}, 5800)



//digital clock in process
var sec = 0;
var min = 0;
var hr = 0;
var am = true;
var clock = document.querySelector(".clock").innerHTML;
console.log(clock);

setInterval(() => {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hr++;
    }
    if (hr == 12) {
        am = !am;
        hr = 0;
    }
    var time = hr + ":" + min + ":" + sec + " " + (am == true ? "am" : "pm");
    document.querySelector(".clock").innerHTML = time;
}, 0.5);