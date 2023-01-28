//Model
const images = [
  's22Ultra-sale.webp',
  'sale-2.png',
  'sale-3.png'
];
const image1 = document.getElementById('sales-image')


//View

let i = 0;
function changePicture() {
  i++;
  if (i > images.length - 1) i = 0;
  imagel.style.backgroundImage = `url(${images[i]})`;
}







//Controller

const chevronRight = () => {



}











