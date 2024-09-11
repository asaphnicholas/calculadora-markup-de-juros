document.getElementById("calculate").addEventListener("click", function() {
    // Obtendo os valores dos inputs
    let valorProduto = parseFloat(document.getElementById("value").value);
    let porcentagemMarkup = parseFloat(document.getElementById("fee").value);
    let parcelas = parseInt(document.getElementById("parcelas").value);

    // Verificando se os valores são válidos
    if (isNaN(valorProduto) || isNaN(porcentagemMarkup) || isNaN(parcelas) || valorProduto <= 0 || porcentagemMarkup < 0 || porcentagemMarkup > 2 || parcelas <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calculando o valor total da venda com markup e número de parcelas
    let valorMarkup = valorProduto * (porcentagemMarkup / 100) * parcelas;
    let valorTotalComMarkup = valorProduto + valorMarkup;

    // Deduzindo a taxa fixa de R$1,49
    let taxaFixaTransacao = 1.49;
    let valorApósTaxaFixa = valorTotalComMarkup - taxaFixaTransacao;

    // Deduzindo a taxa da plataforma (13,06% do valor após taxa fixa)
    let taxaPlataforma = valorApósTaxaFixa * 0.1306;
    let valorRecebido = valorApósTaxaFixa - taxaPlataforma;

    // Exibindo o valor final que o seller vai receber
    document.getElementById("valorRecebido").innerHTML = "R$ " + valorRecebido.toFixed(2);
});