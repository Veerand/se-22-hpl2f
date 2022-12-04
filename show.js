//Põhineb https://www.w3schools.com/howto/howto_js_slideshow.asp juhendil

//Initsialiseerimine, määrame esimese slaidi hetkeslaidiks
let slideIndex = 1;
showSlides(slideIndex);

// funktsioon mis liigub n'i võrrra slaidides edasi. Me kasutame seda ainult 1 võrra edasi või tagasi liikumiseks, aga miski ei takista rohkem liikumast. 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Seda funktsiooni kasutame n'inda slaidi peale minemiseks, meil on see kasutuses pildi all nuppude jaoks. 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Slaidishow põhifunktsioon
function showSlides(n) {
  //määrame muutuja i, me ei anna talle väärtust
  let i;
  //võtame elemendid klassi järgi (slaidid ja nupud)
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //kui me üritame määrata slaidipostisiooni mis on suurem kui slaidide hulk siis läheme esimesele slaidile
  if (n > slides.length) {slideIndex = 1}
  //vastupidine, kui üritame esimesest tahapoole minna siis valitakse viimane slaidid
  if (n < 1) {slideIndex = slides.length}
  //peidame slaidid
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //deaktiveerime nupud
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //määrame uue slaidi nähtavaks
  slides[slideIndex-1].style.display = "block";
  //määrame uue nupu aktiivseks
  dots[slideIndex-1].className += " active";
}