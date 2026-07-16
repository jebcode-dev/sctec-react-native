const abrirChamado = (numero, solicitante, categoria) => ({
    numero,
    solicitante,
    categoria,
    status: "Aberto"
});

const atualizarStatus = (chamado, novoStatus) => {
    chamado.status = novoStatus;
    return chamado;
};

const gerarMensagem = (chamado) =>
    `Chamado #${chamado.numero} está ${chamado.status}.`;

const chamado = abrirChamado(
    102,
    "Maria Oliveira",
    "Rede"
);

console.log(chamado);

const chamadoAtualizado = atualizarStatus(
    chamado,
    "Em atendimento"
);

console.log(chamadoAtualizado);

console.log(gerarMensagem(chamadoAtualizado));