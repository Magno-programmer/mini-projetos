const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    //Erro de falta de preenchimento de um campo
    if(nome != '' && peso != '' && altura == ''){
        resultado.innerHTML = 'por favor, preencha a altura'
    }
    if(nome != '' && peso == '' && altura != ''){
        resultado.innerHTML = 'por favor, preencha o peso'
    }
    if(nome == '' && peso != '' && altura != ''){
        resultado.innerHTML = 'por favor, preencha seu nome'
    }

    //Erro de falta de preenchimento de mais de um campo
    if(nome != '' && peso == '' && altura == ''){
        resultado.innerHTML = 'por favor, preencha todos os campos'
    }
    if(nome == '' && peso == '' && altura != ''){
        resultado.innerHTML = 'por favor, preencha todos os campos'
    }
    if(nome == '' && peso != '' && altura == ''){
        resultado.innerHTML = 'por favor, preencha todos os campos'
    }
    if(nome == '' && peso == '' && altura == ''){
        resultado.innerHTML = 'por favor, preencha todos os campos'
    }

    //Calculo feito e entrega do resultado
    if(nome !== '' && peso !== '' && altura !== ''){
        const calculo = (peso / (altura * altura)).toFixed(1);

        let result = '';


        if(calculo < 18.5){
            result = 'está abaixo do peso';
        }else if(calculo < 24.9){
            result = 'está com peso ideal, parabéns'
        }else if(calculo < 29.9){
            result = 'está com sobrepeso';
        }else if(calculo < 34.9){
            result = 'está com obesidade Iº'
        }else if(calculo < 39.9){
            result = 'está com obesidade IIº'
        }else {
            result = 'está com obesidade IIIº, CUIDADO!!'
        }

        resultado.textContent = `${nome}, seu imc é de ${calculo} você ${result}.`

    }


}



calcular.addEventListener('click', imc)