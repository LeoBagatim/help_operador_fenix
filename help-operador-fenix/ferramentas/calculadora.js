document.addEventListener("DOMContentLoaded", () => {
  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      window.location.href = "../popup.html";
    });
  }

  document.getElementById("calc-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const metragensInput = document.getElementById("metragens").value;
    const velocidade = parseFloat(document.getElementById("velocidade").value);
    const limpezas = parseInt(document.getElementById("limpezas").value);
    const trocaBobina = document.getElementById("trocaBobina").checked;

    const metragens = metragensInput
      .split(",")
      .map(n => parseFloat(n.trim()))
      .filter(n => !isNaN(n));

    const totalMetros = metragens.reduce((a, b) => a + b, 0);

    if (velocidade <= 0 || totalMetros <= 0) {
      document.getElementById("resultado").innerText = "Dados inválidos.";
      return;
    }

    const tempoBrutoHoras = totalMetros / velocidade;
    let tempoMinutos = tempoBrutoHoras * 60;

    // Adiciona gorduras
    tempoMinutos += limpezas * 1.3; // cada limpeza ≈ 1min18s
    if (trocaBobina) tempoMinutos += 7.5;

    const horas = Math.floor(tempoMinutos / 60);
    const minutos = Math.round(tempoMinutos % 60);

    document.getElementById("resultado").innerText =
      `⏱️ Estimativa total: ${horas}h ${minutos}min para ${totalMetros} metros.`;
  });
});
