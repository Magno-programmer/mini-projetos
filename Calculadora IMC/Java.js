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
    if(nome != '' && peso != '' && altura != ''){
        const calculo = peso/(altura*altura).toFixed(1);

        if(calculo < 18,5){
            resultado.innerHTML = `${calculo} é um valor muito baixo para um imc, você esta abaixo do peso.`;
        }else if(calculo < 24,9){
            resultado.innerHTML = `parabéns, seu imc é de ${calculo} e está no peso ideal.`
        }else if(calculo < 29,9){
            resultado.innerHTML = `cuidado, seu imc é de ${calculo} você esta com sobrepeso.`
        }else if(calculo < 34,9){
            resultado.innerHTML = `cuidado, seu imc é de ${calculo} você esta com obesidade Iº.`
        }else if(calculo < 39,9){
            resultado.innerHTML = `cuidado, seu imc é de ${calculo} você esta com obesidade IIº.`
        }else {
            resultado.innerHTML = `ALERTA!!!, seu imc é de ${calculo} você esta com obesidade IIIº.`
        }

    }


}



calcular.addEventListener('click', imc)