$(".about-us-cards").hide();
$(".navbar").hide();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
}

function makeJson(form) {
    var json = {
        "firstname": form.firstname.value,
        "lastname": form.lastname.value,
        "email": form.email.value,
        "message": form.message.value};
    var html = JSON.stringify(json, 0, 4);
}


$(document).ready(function () {
    $(".about-us-cards").fadeIn(500);
    $(".navbar").fadeIn(500);
})

