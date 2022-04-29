function rsopenModal() {
    document.getElementById("rs-myModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("rs-myModal").style.display = "none";
}
var slideIndex = 1;
function plusSlides(e) {
    showSlides((slideIndex += e));
}
function rscurrentSlide(e) {
    showSlides((slideIndex = e));
}
function showSlides(e) {
    var l,
        s = document.getElementsByClassName("rs-mySlides"),
        d = document.getElementsByClassName("demo");
    for (e > s.length && (slideIndex = 1), e < 1 && (slideIndex = s.length), l = 0; l < s.length; l++) s[l].style.display = "none";
    for (l = 0; l < d.length; l++) d[l].className = d[l].className.replace(" active", "");
    s[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);

// show more option
function portfolioShow(){
    document.getElementById("ra-portfolio-hidden").style.display = "grid";
    document.getElementById("ra-portfolio_load_more-btn").style.display = "none";
}