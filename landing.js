/* Array of images that will appear on hover */
var counter = 0, arr = [
  "fridgegif1.png", "fridgegif2.png", "fridgegif3.png", "fridgegif4", "fridgegif5",
  "fridgegif6", "fridgegif7", "fridgegif8"
]


$('img').mouseover(function() {
    $(this).attr('src', function() {
        return arr[counter++];
    })
})
