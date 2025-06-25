document.addEventListener("DOMContentLoaded", () => {
  const contadorEl = document.getElementById("contador");
  const btnIncrementar = document.getElementById("incrementar");
  const btnSubtrair = document.getElementById("subtrair");
  const btnResetar = document.getElementById("resetar");

  
  let contador = 0;

  const atualizarContador = () => {
    contadorEl.innerText = contador;
  };

  btnIncrementar.addEventListener("click", () => {
    contador++;
    atualizarContador();
  });

  btnSubtrair.addEventListener("click", () => {
    if (contador > 0) {
      contador--;
      atualizarContador();
    }
  });

  btnResetar.addEventListener("click", () => {
    contador = 0;
    atualizarContador();
  });

  btnVoltar.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  atualizarContador();
})
document.addEventListener("DOMContentLoaded", () => {
  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      window.location.href = "../popup.html";
    });
  }
});
