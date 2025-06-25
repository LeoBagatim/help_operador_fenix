document.addEventListener("DOMContentLoaded", () => {
  const btnFormatador = document.getElementById("btn-formatador");
  const btnCalculadora = document.getElementById("btn-calculadora");
  const btnCounter = document.getElementById("btn-counter");

  if (btnFormatador) {
    btnFormatador.addEventListener("click", () => {
      window.location.href = "ferramentas/formatador.html";
    });
  }

  if (btnCalculadora) {
    btnCalculadora.addEventListener("click", () => {
      window.location.href = "ferramentas/calculadora.html";
    });
  }

  if (btnCounter) {
    btnCounter.addEventListener("click", () => {
      window.location.href = "ferramentas/counter.html";
    });
  }
});
