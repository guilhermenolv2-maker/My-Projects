// Efeito de digitação

const texto = "Desenvolvedor Front-End";
const elemento = document.querySelector(".digitando");

let i = 0;

function escrever() {

    if (i < texto.length) {

        elemento.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 100);

    }

}

elemento.innerHTML = "";

escrever();


// Animação ao rolar a página

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

});

document.querySelectorAll(".card, .projeto").forEach((el) => {

    el.classList.add("esconder");

    observador.observe(el);

});


// Botão voltar ao topo

const voltarTopo = document.createElement("button");

voltarTopo.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

voltarTopo.id = "topo";

document.body.appendChild(voltarTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        voltarTopo.classList.add("ativo");

    }

    else {

        voltarTopo.classList.remove("ativo");

    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
const barras = document.querySelectorAll(".progresso");

const observerBarras = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("ativo");

        }

    });

});

barras.forEach((barra)=>{

    observerBarras.observe(barra);

});