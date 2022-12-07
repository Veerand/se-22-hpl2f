

//pildi reageerimine
function openFullImg(pic) {
//elementide initsialiseerimine
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
fullImgBox.style.display = "flex";
fullImg.src = pic;
}
//pildi kinni panemine
function closeFullImg() {
fullImgBox.style.display = "none";
}
