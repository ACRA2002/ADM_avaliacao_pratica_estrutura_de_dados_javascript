

let itens = [{nome:"Lápis", preco:2.00}, {nome:"Caderno", preco: 15.00}, {nome:"Borracha", preco:1.50}];

let soma = 0;

itens.forEach(item => {
    soma += item.preco;
});

console.log(`Total: R$:${soma}`);