

// ============================================
//  ATIVIDADE 1: Declaração e Tipos de Variáveis
// ============================================


// --- Variáveis para informações da padaria ---
var nomePadaria = "Padaria do Bairro";      // var (escopo de função)
const telefone = "(37) 9999-9999";           // const (não pode ser alterado)
let endereco = "Rua Principal, 123";         // let (pode ser alterado)
const anoFundacao = 1970;

console.log(`Nome: ${nomePadaria}`);
console.log(`Telefone: ${telefone}`);
console.log(`Endereço: ${endereco}`);
console.log(`Fundação: ${anoFundacao}`);

// --- Variáveis para preços de produtos ---
let precoPao = 8.00;
let precoCafe = 6.00;
let precoDoceLeite = 10.00;
let precoBoloChocolate = 12.00;
let precoCroissant = 15.00;
let precoPaoQueijo = 5.00;
let precoSalgado = 7.00;
let precoPaoMel = 9.00;

console.log("\n--- Preços dos Produtos ---");
console.log(`Pão: R$ ${precoPao.toFixed(2)}`);
console.log(`Café: R$ ${precoCafe.toFixed(2)}`);
console.log(`Doce de Leite: R$ ${precoDoceLeite.toFixed(2)}`);

// --- Controle de estoque com variáveis numéricas ---
let estoquePao = 50;
let estoqueCafe = 100;
let estoqueDoceLeite = 30;
let estoqueBolo = 20;

console.log("\n--- Controle de Estoque ---");
console.log(`Estoque Pão: ${estoquePao} unidades`);
console.log(`Estoque Café: ${estoqueCafe} unidades`);
console.log(`Estoque Doce de Leite: ${estoqueDoceLeite} unidades`);

// --- Arrays de produtos e categorias ---
const categorias = ["Pães", "Bebidas", "Doces", "Bolos", "Salgados"];
const produtosNomes = ["Pão Croc-croc", "Café Gourmet", "Doce de Leite", "Bolo de Chocolate", "Croissant de Amêndoas", "Pão de Queijo", "Salgado de Frango", "Pão de Mel"];

console.log("\n--- Arrays ---");
console.log("Categorias:", categorias);
console.log("Produtos:", produtosNomes);

// --- Objetos para representar produtos completos ---
const produto1 = {
    nome: "Pão Croc-croc",
    preco: 8.00,
    estoque: 50,
    categoria: "Pães",
    codigo: "PAO001"
};

const produto2 = {
    nome: "Café Gourmet",
    preco: 6.00,
    estoque: 100,
    categoria: "Bebidas",
    codigo: "BEB001"
};

const produto3 = {
    nome: "Doce de Leite",
    preco: 10.00,
    estoque: 30,
    categoria: "Doces",
    codigo: "DOC001"
};

console.log("\n--- Objetos Produtos ---");
console.log(produto1);
console.log(produto2);
console.log(produto3);


// ============================================
//  ATIVIDADE 3: Manipulação de Strings e Dados
// ============================================


// --- Mensagens de boas-vindas personalizadas ---
function criarBoasVindas(nome) {
    const nomeFormatado = formatarNome(nome);
    const hora = new Date().getHours();
    let saudacao;
    
    if (hora < 12) {
        saudacao = "Bom dia";
    } else if (hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }
    
    return `${saudacao}, ${nomeFormatado}! Seja bem-vindo(a) à ${nomePadaria}!`;
}

console.log("\n--- Mensagens de Boas-vindas ---");
console.log(criarBoasVindas("joão silva"));
console.log(criarBoasVindas("maria"));


