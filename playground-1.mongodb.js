// Usando o banco de dados
use("BD3-NoSQL-Produtos")

// Criando a collection e inserindo 10 produtos
db["bd3-nosql-atv7"].insertMany([
  {
    cod_produto: 1,
    nome_produto: "Produto A",
    desc_produto: "Descrição do Produto A",
    valor: 150.00
  },
  {
    cod_produto: 2,
    nome_produto: "Produto B",
    desc_produto: "Descrição do Produto B",
    valor: 250.00
  },
  {
    cod_produto: 3,
    nome_produto: "Produto C",
    desc_produto: "Descrição do Produto C",
    valor: 350.00
  },
  {
    cod_produto: 4,
    nome_produto: "Produto D",
    desc_produto: "Descrição do Produto D",
    valor: 450.00
  },
  {
    cod_produto: 5,
    nome_produto: "Produto E",
    desc_produto: "Descrição do Produto E",
    valor: 550.00
  },
  {
    cod_produto: 6,
    nome_produto: "Produto F",
    desc_produto: "Descrição do Produto F",
    valor: 650.00
  },
  {
    cod_produto: 7,
    nome_produto: "Produto G",
    desc_produto: "Descrição do Produto G",
    valor: 750.00
  },
  {
    cod_produto: 8,
    nome_produto: "Produto H",
    desc_produto: "Descrição do Produto H",
    valor: 850.00
  },
  {
    cod_produto: 9,
    nome_produto: "Produto I",
    desc_produto: "Descrição do Produto I",
    valor: 950.00
  },
  {
    cod_produto: 10,
    nome_produto: "Produto J",
    desc_produto: "Descrição do Produto J",
    valor: 1050.00
  }
])

// Selecionando produtos com valor maior que 700 reais
db["bd3-nosql-atv7"].find({ valor: { $gt: 700 } }).pretty()

// Selecionando produtos com valor menor que 450 reais
db["bd3-nosql-atv7"].find({ valor: { $lt: 450 } }).pretty()

// Selecionando produtos com valor maior ou igual a 500 reais e menor ou igual a 950 reais
db["bd3-nosql-atv7"].find({ valor: { $gte: 500, $lte: 950 } }).pretty()
