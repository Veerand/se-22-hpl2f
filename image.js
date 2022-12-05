//elementide initsialiseerimine
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

//pildi reageerimine
function openFullImg(pic) {
fullImgBox.style.display = "flex";
fullImg.src = pic;
}
//pildi kinni panemine
function closeFullImg() {
fullImgBox.style.display = "none";
}