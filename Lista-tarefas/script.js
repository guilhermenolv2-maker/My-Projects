const input = document.getElementById("tarefaInput");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");
const total = document.getElementById("total");
const concluidas = document.getElementById("concluidas");
const filtros = document.querySelectorAll(".filtro");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let filtroAtual = "todas";

function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function atualizarContadores() {
    total.textContent = tarefas.length;
    concluidas.textContent = tarefas.filter(t => t.concluida).length;
}

function renderizar() {

    lista.innerHTML = "";

    let tarefasFiltradas = tarefas.filter(tarefa => {
        if (filtroAtual === "pendentes") return !tarefa.concluida;
        if (filtroAtual === "concluidas") return tarefa.concluida;
        return true;
    });

    tarefasFiltradas.forEach((tarefa, indice) => {

        const li = document.createElement("li");

        if (tarefa.concluida) {
            li.classList.add("concluida");
        }

        li.innerHTML = `
            <span>${tarefa.texto}</span>

            <div class="acoes">
                <button class="check">✓</button>
                <button class="delete">🗑</button>
            </div>
        `;

        li.querySelector(".check").addEventListener("click", () => {
            tarefa.concluida = !tarefa.concluida;
            salvar();
            renderizar();
        });

        li.querySelector(".delete").addEventListener("click", () => {
            tarefas.splice(indice,1);
            salvar();
            renderizar();
        });

        lista.appendChild(li);
    });

    atualizarContadores();
}

btnAdicionar.addEventListener("click", () => {

    if(input.value.trim() === "") return;

    tarefas.push({
        texto: input.value,
        concluida: false
    });

    input.value = "";
    salvar();
    renderizar();
});

input.addEventListener("keypress", e => {
    if(e.key === "Enter"){
        btnAdicionar.click();
    }
});

filtros.forEach(botao => {

    botao.addEventListener("click", () => {

        document.querySelector(".ativo").classList.remove("ativo");
        botao.classList.add("ativo");

        filtroAtual = botao.dataset.filtro;

        renderizar();
    });

});

renderizar();