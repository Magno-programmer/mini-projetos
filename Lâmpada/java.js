const lampada = document.getElementById('lampada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');

function on(){
    lampada.src = './img/ligada.jpg';
}

function off(){
    lampada.src = './img/desligada.jpg';
}

function turnOff(){
    lampada.src = './img/desligada.jpg';
}


function turnOn(){
    lampada.src = './img/ligada.jpg';
}


ligar.addEventListener('click', on);
desligar.addEventListener('click', off);
lampada.addEventListener('mouseleave', turnOff);
lampada.addEventListener('mouseenter', turnOn);