let images = document.querySelectorAll(".images img");
let ArrImage = Array.from(images);


let vuImages = document.querySelector(".vuImages img");
let div = document.querySelector(".vuImages");

let close = document.querySelector(".a .close");

ArrImage.forEach((el) => {
   el.addEventListener("click", (eve) => {
      vuImages.src = eve.target.src;
      div.style.display = "block";

   });
});


close.addEventListener("click", () => {
   if(div.style.display === "none") {
      div.style.display = "block";
   } else {
      div.style.display = "none";
   }
});