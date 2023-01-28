//Model
const images = [
  'sales/s22Ultra-sale.webp',
  'sales/sale-2.png',
  'sales/sale-3.png'
];


let nIntervId;
num = 0
let op = 1





//View





const changeImage = () => {
  if (num < 0) {
    num = num+3
  }
  num = num % 3
  image1.src = images[num]
  clearInterval(nIntervId);
  nIntervId = null;
}


const opacityChange2 = () => {
  if (op < 1) {
    op = op +0.05
    image1.style.opacity = op
  } else {
    clearInterval(nIntervId);
    nIntervId = null;
  }
  
}


const opacityChange = () => {
  if (op <= 0.1) {
    changeImage()
    fadeIn()
    
  } else {
    op = op - 0.05
    image1.style.opacity = op
  }
  
}
const fadeOut = () => {
  if (!nIntervId) {
      nIntervId = setInterval(opacityChange, 25);
    }
}
const fadeIn = () => {
  if (!nIntervId) {
      nIntervId = setInterval(opacityChange2, 25);
    }
  }





//Controller

const nextImage = () => {
  num = num + 1
  fadeOut() 
}




const prevImage = () => {
  num = num - 1
  fadeOut()

}












