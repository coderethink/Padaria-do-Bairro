// ============================================
//  NAVEGAÇÃO - Script para linkar a navegação das navs links
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Função para navegação suave e highlights
    function setupNavigation() {
        const navLinks = document.querySelectorAll('.header-principal nav a');
        const currentPage = window.location.pathname;
        const hash = window.location.hash;

        // Função para rolar suavemente até a seção
        function smoothScrollTo(targetId) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Adicionar evento de clique para todos os links de navegação
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Verificar se é um link para outra página
                if (href.includes('.html') && !href.includes('#')) {
                    // É um link para outra página - deixar comportamento padrão
                    return;
                }
                
                // Verificar se tem hash (navegação interna)
                if (href.includes('#')) {
                    e.preventDefault();
                    const hashPart = href.split('#')[1];
                    const targetId = '#' + hashPart;
                    
                    // Se não estamos na página index, navegar para ela primeiro
                    if (!currentPage.includes('index.html') && !currentPage.endsWith('/')) {
                        window.location.href = './index.html' + targetId;
                    } else {
                        // Estamos na mesma página - rolar suavemente
                        smoothScrollTo(targetId);
                    }
                }
            });
        });

        // Highlight do link ativo baseado na URL atual
        function highlightActiveLink() {
            const currentHash = window.location.hash || '#inicio';
            const currentPath = window.location.pathname;
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                
                // Resetar classe
                link.classList.remove('active');
                
                // Verificar se é a página atual
                if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
                    // Estamos na página inicial
                    if (href === './index.html' || href === 'index.html') {
                        if (!href.includes('#')) {
                            link.classList.add('active');
                        }
                    } else if (currentHash && href.includes(currentHash.replace('#', ''))) {
                        link.classList.add('active');
                    }
                } else if (currentPath.includes('contato.html')) {
                    if (href.includes('contato.html')) {
                        link.classList.add('active');
                    }
                } else if (currentPath.includes('ofertas.html')) {
                    if (href.includes('ofertas.html')) {
                        link.classList.add('active');
                    }
                } else if (currentPath.includes('privacidade.html')) {
                    if (href.includes('privacidade.html')) {
                        link.classList.add('active');
                    }
                }
            });
        }

        // Executar highlight inicial
        highlightActiveLink();

        // Atualizar highlight ao mudar hash
        window.addEventListener('hashchange', highlightActiveLink);
    }

    // Iniciar navegação
    setupNavigation();

    // Verificar se tem hash na URL ao carregar a página
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
});

// ============================================
//  ATIVIDADE 1: Declaração e Tipos de Variáveis
// ============================================

// --- Variáveis para informações da padaria ---
var nomePadaria = "Padaria do Bairro"; // var (escopo de função)
const telefone = "(37) 9999-9999"; // const (não pode ser alterado)
let endereco = "Rua Principal, 123"; // let (pode ser alterado)
const anoFundacao = 1970;

console.log(`Nome: ${nomePadaria}`);
console.log(`Telefone: ${telefone}`);
console.log(`Endereço: ${endereco}`);
console.log(`Fundação: ${anoFundacao}`);

// --- Variáveis para preços de produtos ---
let precoPao = 8.0;
let precoCafe = 6.0;
let precoDoceLeite = 10.0;
let precoBoloChocolate = 12.0;
let precoCroissant = 15.0;
let precoPaoQueijo = 5.0;
let precoSalgado = 7.0;
let precoPaoMel = 9.0;

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
const produtosNomes = [
  "Pão Croc-croc",
  "Café Gourmet",
  "Doce de Leite",
  "Bolo de Chocolate",
  "Croissant de Amêndoas",
  "Pão de Queijo",
  "Salgado de Frango",
  "Pão de Mel",
];

console.log("\n--- Arrays ---");
console.log("Categorias:", categorias);
console.log("Produtos:", produtosNomes);

const produtos = [
  {
    nome: "Pão Croc-croc",
    preco: 8.0,
    estoque: 50,
    categoria: "Pães",
    codigo: "PAO001",
    descricao: "Pão crocante com grãos selecionados.",
  },
  {
    nome: "Café Gourmet",
    preco: 6.0,
    estoque: 100,
    categoria: "Bebidas",
    codigo: "BEB001",
    descricao: "Sabor intenso e aroma irresistível.",
  },
  {
    nome: "Doce de Leite",
    preco: 10.0,
    estoque: 30,
    categoria: "Doces",
    codigo: "DOC001",
    descricao: "Doce de leite cremoso e irresistível.",
  },
  {
    nome: "Bolo de Chocolate",
    preco: 12.0,
    estoque: 20,
    categoria: "Bolos",
    codigo: "BOL001",
    descricao: "Bolo de chocolate úmido e delicioso.",
  },
  {
    nome: "Croissant de Amêndoas",
    preco: 15.0,
    estoque: 40,
    categoria: "Salgados",
    codigo: "SAL001",
    descricao: "Croissant rechado com creme de amêndoas.",
  },
  {
    nome: "Pão de Queijo",
    preco: 5.0,
    estoque: 150,
    categoria: "Salgados",
    codigo: "SAL002",
    descricao: "Pão de queijo quentinho e saboroso.",
  },
  {
    nome: "Salgado de Frango",
    preco: 7.0,
    estoque: 80,
    categoria: "Salgados",
    codigo: "SAL003",
    descricao: "Salgado rechado com frango temperado.",
  },
  {
    nome: "Pão de Mel",
    preco: 9.0,
    estoque: 60,
    categoria: "Doces",
    codigo: "DOC002",
    descricao: "Pão de mel macio e aromático.",
  },
];

// ============================================
//  ATIVIDADE 3: Manipulação de Strings e Dados
// ============================================

// --- Formatar nome: primeira letra maiúscula de cada palavra ---
function formatarNome(nome) {
  const palavras = nome.split(" ");
  const nomeFormatado = palavras.map(
    (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1),
  );
  return nomeFormatado;
}

// 👋 Uma função que exiba uma mensagem de boas-vindas
function exibirBoasVindas(nome) {
  const nomeFormatado = formatarNome(nome);
  console.log(`Olá, ${nomeFormatado}! Bem-vindo à nossa padaria!`);
}

// 🛒 Uma função que calcule o subtotal de itens (receba preço e quantidade)
function calcularSubtotal(preco, quantidade) {
  let resultado = preco * quantidade;
  return resultado;
}
let total = calcularSubtotal(10.5, 2);
console.log(total);

// 🎁 Uma função que calcule desconto (receba valor e percentual de desconto)
function calcularDesconto(valor, percentual) {
  return valor * (percentual / 100);
}

// 🚚 Uma função que calcule a taxa de entrega baseada na distância

function calcularTaxaEntrega(distancia) {
  const taxaBase = 5.0;
  const taxaPorKm = 0.5;
  return taxaBase + distancia * taxaPorKm;
}

// ============================================
//  ATIVIDADE: Pesquisa de produtos
// ============================================
document.getElementById("campo-filtro").addEventListener("input", (e) => {
  const valor = e.target.value.toLowerCase();
  const resultado = document.getElementById("resultado");

  // Limpa a lista antes de filtrar
  resultado.innerHTML = "";

  if (valor === "") {
    return; // Não faz nada se o campo estiver vazio
  }

  // Filtra e renderiza
  produtos
    .filter((produto) => produto.nome.toLowerCase().includes(valor))
    .forEach((produto) => {
      const li = document.createElement("li");
      li.textContent = `${produto.nome} - ${produto.descricao}`;
      resultado.appendChild(li);
    });
});

// ============================================
//  Avaliação por estrelas - Formulário de Contato
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.avaliacao input[type="radio"]');
    
    stars.forEach(star => {
        star.addEventListener('change', function() {
            console.log('Avaliação selecionada: ' + this.value + ' estrelas');
        });
    });
});
