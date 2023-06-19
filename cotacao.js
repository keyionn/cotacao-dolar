const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";


// A função fetch para fazer uma solicitação a API, e obter a cotação do dólar p/ reais.
// Para obter a cotacao do dolar.
function getCotacao(callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const cotacao = data.USDBRL.high;
      callback(cotacao);
    });
}

// função para conversão de dólar para real.
function converterDolarParaReal(valor, cotacao) {
  return valor * cotacao;
}

// função para atualizar o valor em reais na tela
function atualizarValorReal(valorDolar, cotacao) {
  const valorReal = converterDolarParaReal(valorDolar, cotacao);
  const spanValorReal = document.getElementById("valor-real");
  spanValorReal.innerText = valorReal.toFixed(2);
}

// Para atualizar o valor em reais ao digitar um valor em dólares.
const inputValorDolar = document.getElementById("valor-dolar");
inputValorDolar.addEventListener("input", () => {
  const valorDolar = inputValorDolar.value;
  getCotacao(cotacao => {
    atualizarValorReal(valorDolar, cotacao);
  });
});

// Atualiza o valor em reais ao carregar a página.
getCotacao(cotacao => {
  atualizarValorReal(0, cotacao);
});
