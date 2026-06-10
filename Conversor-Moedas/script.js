const botao = document.getElementById("converter");

botao.addEventListener("click", () => {

    const valor = Number(document.getElementById("valor").value);
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    const resultado = document.getElementById("resultado");

    // Taxas fixas em relação ao Real
    const taxas = {
        BRL: 1,
        USD: 5.50,
        EUR: 6.40,
        GBP: 7.50
    };

    // Converte para BRL
    let valorEmReal;

    if (de === "BRL") {
        valorEmReal = valor;
    } else {
        valorEmReal = valor * taxas[de];
    }

    // Converte do BRL para a moeda desejada
    let valorFinal;

    if (para === "BRL") {
        valorFinal = valorEmReal;
    } else {
        valorFinal = valorEmReal / taxas[para];
    }

    resultado.innerHTML = `Resultado: ${valorFinal.toFixed(2)} ${para}`;
});