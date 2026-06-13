const slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide() {

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(showSlide, 4000);

function playMovie() {

  window.open("player.html", "_blank");

}



//search code
function searchContent() {
  let input = document.getElementById("searchinput").value.toLowerCase();
  let items = document.querySelectorAll(".item");
  let row = document.querySelectorAll(".row");
 
  
    items.forEach(function (item) {
      let text = item.getAttribute("data-name");
      if(text){
        let lowertext = text.toLowerCase();
      if (lowertext.includes(input)) {
        item.style.display = "block";
      }
      else {
        item.style.display = "none";
      }
      }
    });
}

//making it smoother
const x =document.getElementById("searchinput")
const y =document.getElementById("1st-row")

x.addEventListener("focus",()=>{
  y.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
});