const body = document.querySelector("body");

const IMAGE_NUMBER = 7;


function paintImage(imageNumber){
    const image = new Image();
    image.src = `images/picture${imageNumber}.jpg`;
    image.classList.add("backgroundImage");
    body.appendChild(image);
}



function getRandom(){
    const number = Math.floor(Math.random() * IMAGE_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();