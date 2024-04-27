const calcularTotal = (ferramentas, comprar) => {
    if (ferramentas.length == 0 || comprar.length == 0) {
        throw new Error('Ambas as listas precisam ter ao menos um item.');
    } else {
        let somaDosPrecos = 0;
        let ferramentasEncontradas = [];
        for(let indiceFerramentas = 0; indiceFerramentas < ferramentas.length; indiceFerramentas++) {
            for(let indiceComprar = 0; indiceComprar < comprar.length; indiceComprar++) {
                if(ferramentas[indiceFerramentas].nome == comprar[indiceComprar]) {
                    somaDosPrecos += ferramentas[indiceFerramentas].preco;
                    ferramentasEncontradas[ferramentasEncontradas.length] = comprar[indiceComprar];
                }
            }
        }
        if (ferramentasEncontradas.length == 0) {
            throw new Error('Nenhuma ferramenta desejada encontrada.');
        } else {
            return `O valor a pagar pelas ferramentas (${ferramentasEncontradas.join(", ")}) é R$ ${somaDosPrecos.toFixed(2)}`;
        }
    }
};

module.exports = {
    calcularTotal
};