const statusPedido = Number(process.argv[2]);
let mensagem = "";

switch (statusPedido) {
  case 1:
    mensagem = "Pedido recebido";
    break;
  case 2:
    mensagem = "Em separação no estoque";
    break;
  case 3:
    mensagem = "Enviado para a transportadora";
    break;
  case 4:
    mensagem = "Saiu para entrega";
    break;
  case 5:
    mensagem = "Entregue";
    break;
  default:
    mensagem = "Status desconhecido, entre em contato com o suporte";
}

console.log(mensagem);