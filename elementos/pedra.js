let jescolha = 0;
let cescolha = 0;
let ganhador = -1;
let cpontos = 0;
let ppontos = 0;
/*Planta 1 Fogo 2 Agua 3 */

function jogar(escolha) {
    jescolha = escolha;
    cescolha = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (jescolha == cescolha) {
        ganhador = 0;
    }

    else if ((jescolha == 1) && (cescolha == 2)) {
        ganhador = 2;
        cpontos++;
    }

    else if ((jescolha == 1) && (cescolha == 3)){
        ganhador = 1;
        ppontos++;
    }

    else if ((jescolha == 2) && (cescolha == 1)){
        ganhador = 1;
        ppontos++;
    }

    else if ((jescolha == 2) && (cescolha == 3)){
        ganhador = 2;
        cpontos++;
    }

    else if ((jescolha == 3) && (cescolha == 1)){
        ganhador = 2;
        cpontos++;
    }

    else if ((jescolha == 3) && (cescolha == 2)){
        ganhador = 1;
        ppontos++;
    }

    document.getElementById("pescolha-1").classList.remove('selecionado');
    document.getElementById("pescolha-2").classList.remove('selecionado');
    document.getElementById("pescolha-3").classList.remove('selecionado');

    document.getElementById("cescolha-1").classList.remove('selecionado');
    document.getElementById("cescolha-2").classList.remove('selecionado');
    document.getElementById("cescolha-3").classList.remove('selecionado');

    document.getElementById("pescolha-" + jescolha).classList.add('selecionado');

    document.getElementById("cescolha-" + cescolha).classList.add('selecionado');

    document.getElementById("pppontos").innerHTML = ppontos;
    document.getElementById("pcpontos").innerHTML = cpontos;

    if(ganhador == 0){

        document.getElementById('mensagem').innerHTML = 'Empatou';

    }

    else if(ganhador == 1){

        document.getElementById('mensagem').innerHTML = 'Jogador ganhou';

    }

    else if(ganhador == 2){
        document.getElementById('mensagem').innerHTML = 'Computador ganhou';
    }
}