// Primeiro eu declarei todo o cardápio

// Grupo cervejas
const skol = {
    nome: "Skol",
    preco: 600,
    tipo: "latão"
};
const brahma = {
    nome: "Brahma",
    preco: 700,
    tipo: "latão"
};
const heineken = {
    nome: "Heineken",
    preco: 800,
    tipo: "long"
};

// Grupo Vodkas
const kovak = {
    nome: "Kovak",
    preco: 1500,
    tipo: "dose"
};
const skyy = {
    nome: "Skyy",
    preco: 2000,
    tipo: "dose"
};
const absolut = {
    nome: "Absolut",
    preco: 2500,
    tipo: "dose"
};

// Grupo Petiscos
const fritas = {
    nome: "Batata-Frita",
    preco: 2000,
    tipo: "porção"
};
const dogao = {
    nome: "Cachorro-Quente",
    preco: 2200,
    tipo: "unidade"
};
const burguer = {
    nome: "Hamburguer",
    preco: 2500,
    tipo: "unidade"
};

// Grupo Produtos
const cervejas = {
    skol,
    brahma,  
    heineken
};
const vodkas = {
    kovak,
    skyy,
    absolut
};
const petiscos = {
    fritas,
    dogao,
    burguer
};

// Cardapio
const produtos = {
    vodkas,
    cervejas,
    petiscos
};

// Aqui eu declaro um array de objetos, cada um sendo uma comanda
const comandas = [
    {
        id: 0001,
        entrada: new Date(2022,08,7,16,0,0),
        cliente: {
            nome: "Paulo Calvo",
            idade: 29,
            mesa: 69,
            pessoas: 1
        },
        consumo: [
            {
                item: produtos.vodkas.kovak.nome,
                preco: produtos.vodkas.kovak.preco,
                quantidade: 1,
                hora: new Date(2022,08,7,16,5,0)
            },
            {
                item: produtos.cervejas.skol.nome,
                preco: produtos.cervejas.skol.preco,
                quantidade: 1,
                hora: new Date(2022,08,7,16,10,0)
            },
            {
                item: produtos.petiscos.fritas.nome,
                preco: produtos.petiscos.fritas.preco,
                quantidade: 1,
                hora: new Date(2022,08,7,16,45,0)
            }
        ]
    },
    {
        id: 0002,
        entrada: new Date(2022,08,7,16,10,0),
        cliente: {
            nome: "Gago Mudo",
            idade: 27,
            mesa: 171,
            pessoas: 2
        },
        consumo: [
            {
                item: produtos.cervejas.heineken.nome,
                preco: produtos.cervejas.heineken.preco,
                quantidade: 2,
                hora: new Date(2022,08,7,16,12,0)
            },
            {
                item: produtos.petiscos.burguer.nome,
                preco: produtos.petiscos.burguer.preco,
                quantidade: 2,
                hora: new Date(2022,08,7,16,20,0)
            },
            {
                item: produtos.vodkas.skyy.nome,
                preco: produtos.vodkas.skyy.preco,
                quantidade: 1,
                hora: new Date(2022,08,7,16,55,0)
            }
        ]
    }
]

console.log(`O nome do cliente é ${comandas[0].cliente.nome}.`);
console.log(`O cliente tem ${comandas[0].cliente.idade} anos de idade.`);
comandas[0].cliente.idade = 30;
console.log(`A idade estava incorreta, vamos corrigir...`)
console.log(`Agora sim, sua idade é de ${comandas[0].cliente.idade} anos.`);
console.log(`Seu primeiro pedido foi: ${comandas[0].consumo[0].item}.`);
console.log(`E o valor de seu último pedido foi de R$${(comandas[0].consumo[2].preco/100).toFixed(2)}`);


/* 
// 1 minuto  = 60_000 ms
let tempo = new Date();
console.log(tempo);
tempo = new Date(2022,08,7,16,0,0);
console.log(tempo);
*/