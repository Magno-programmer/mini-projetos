const lampada = document.getElementById('lampada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');

function continuaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}

function on(){
    if(!continuaQuebrada()){
        lampada.src = './img/ligada.jpg';
    }
}

function off(){
    if(!continuaQuebrada()){
        lampada.src = './img/desligada.jpg';
    }
    
}

function quebra(){
    lampada.src = './img/quebrada.jpg'
}


ligar.addEventListener('click', on);
desligar.addEventListener('click', off);
lampada.addEventListener('mouseleave', off);
lampada.addEventListener('mouseenter', on);
lampada.addEventListener('dblclick', quebra)