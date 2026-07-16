function cupomValido(codigo) {
    return codigo === "PROMO10";
}

function aplicarDesconto(valor, cupom) {
    if (cupomValido(cupom)) {
        return valor - (valor * 0.10);
    } else {
        return valor;
    }
}

let valor = 100;
let codigo = "PROMO10";

console.log(cupomValido(codigo));
console.log(aplicarDesconto(valor, codigo));