/* MAQUINA DE ESCREVER */

const inserir = document.querySelector("#nome")
const texto = "Fidalgo"
const intervalo = 130;

function mostraTexto(inserir, texto, intervalo){

    const letra = texto.split("").reverse();

    const typer = setInterval(() => {

        if(!letra.length){
            return clearInterval(typer);
        }

        const prox = letra.pop();

        inserir.innerHTML += prox;

    }, intervalo);
}

mostraTexto(inserir, texto, intervalo);



/* CRIA IMAGENS NA GALERIA */
const frame = []; //array da moldura
const foto = []; //array das fotos
let local = document.getElementById("local"); //local da inserção das fotos
let x = 456; //valor do x da linha inferior
let x2 = 590; //valor do x da linha superior

window.onload= () => { //funciona simultaneo ao carregamento da pgn
    for (let c = 1; c <= 5; c++) {

        frame[c] = document.createElement("img");
        frame[c].src = ("Imagens/frame.png");
        local.appendChild(frame[c])
        frame[c].classList.add("moldura")

        foto[c] = document.createElement("img"); //cria um elemento imagem em cada posicao da array
        foto[c].src = (`Imagens/foto${c}.png`); //define o link da foto a ser adicionada
        local.appendChild(foto[c]) //adiciona a imagem ao local
        foto[c].classList.add("foto"); //adiciona o atributo class as imagens

        if (c <= 3) {
            frame[c].style.top = "1690px"; //define o y da imagem
            frame[c].style.left = `${x - 17}px`; //define o x da imagem

            foto[c].style.top = "1707px";
            foto[c].style.left = `${x}px`;
            x = x + 230; //distancia entre as imagens

        }
        else {
            frame[c].style.top = "1395px";
            frame[c].style.left = `${x2 - 17}px`;

            foto[c].style.top = "1412px";
            foto[c].style.left = `${x2}px`;
            x2 = x2 + 230;
        }
    }
}
