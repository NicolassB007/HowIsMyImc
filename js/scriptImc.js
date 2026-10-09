function escopoGeral() {
  const formulario = document.querySelector("#formulario");
  const resultados = document.querySelector("#resultCalc");

  // TROCAR NOME DA FUNÇÃO
  function recebeDadosForm(evento) {
    evento.preventDefault();

    const pesoUser = formulario.querySelector("#pesoUsuario");
    const alturaUser = formulario.querySelector("#alturaUsuario");
    const alertaUser = formulario.querySelector("#alerta");

    const pesoUserConverted = Number.parseFloat(pesoUser.value);
    const alturaUserConverted = Number.parseFloat(alturaUser.value);

    let calcImcResult = 0;

    if (Number.isNaN(pesoUserConverted) || Number.isNaN(alturaUserConverted)) {
      alertaUser.innerHTML = "Cheque os valores inseridos acima!";

      pesoUser.value = "";
      alturaUser.value = "";
    } else {
      calcImcResult = pesoUserConverted / Math.pow(alturaUserConverted, 2);

      resultados.innerHTML = `<strong>Seu IMC: ${calcImcResult.toFixed(2)}</strong>`;
    }

    pesoUser.value = "";
    alturaUser.value = "";
  }

  document.addEventListener("submit", recebeDadosForm);
}

escopoGeral();
