const abrirChamado = (numero, solicitante, categoria, prioridade) => ({
  numero,
  solicitante,
  categoria,
  prioridade,
  status: "Aberto"
});

const chamado = abrirChamado(
  101,
  "João Silva",
  "Computador",
  "Alta"
);

console.log(chamado);