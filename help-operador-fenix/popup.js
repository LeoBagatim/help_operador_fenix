document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const tipo = document.getElementById("tipo").value;
  const vendedor = document.getElementById("vendedor").value.trim();
  const pedido = document.getElementById("pedido").value.trim();
  const arquivo = document.getElementById("arquivo").value.trim();
  const metragem = document.getElementById("metragem").value.trim();

  const textoFormatado = `${tipo} ${vendedor} - ${pedido} - ${arquivo} - ${metragem}m`;

  navigator.clipboard.writeText(textoFormatado).then(() => {
    document.getElementById("resultado").innerText = `Copiado: ${textoFormatado}`;
  }).catch(err => {
    document.getElementById("resultado").innerText = "Erro ao copiar";
  });
});
