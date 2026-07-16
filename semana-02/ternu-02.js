let valorCompra = 180;
let clienteVIP = true;

// Operador ternário
let frete = (valorCompra >= 200 || clienteVIP) ? 0 : 15.90;

// Template literal
let mensagem = frete === 0 ? "Frete gratis" : `Valor do frete: R$ ${frete.toFixed(2)}`;

console.log(mensagem);