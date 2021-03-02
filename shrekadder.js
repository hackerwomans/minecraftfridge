/* Shrek */
const images = [
  "shrekeanna.png", "shrekeannahap.png"
]

/* Keeping track of images with variable being i and placing images*/
let i = 0

function placeImage(x,y) {

  const nextImage = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"

  document.body.appendChild(img)

   i = i + 1

  /* Looping food images */
  if (i >=images.length) {
    i = 0
  }
}

/* Food images appearing on click */
document.addEventListener("click", function(event){

  placeImage(event.pageX, event.pageY)

})

//end of file
