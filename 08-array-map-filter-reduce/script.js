// map, filter e reduce retornam uma array nova, eles não modificam a original
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
];

// const precosfiltro = precos.filter(function(preco) {
//   console.log(preco);
//   // if(preco.includes("R$")) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return preco.includes("R$")
// });

// // Poderia deixar o codigo mais limpro assim:
// // const precosFiltro = precos.filter(preco => preco.includes("R$"));

// console.log(precosfiltro);

//treinando
// const precosFiltro = precos.filter(function(preco) {
//   // console.log(preco);
//   // console.log(preco.includes("R$"));
//   return preco.includes("R$")
// })

// console.log(precosFiltro);

const precosFiltro = precos.filter(function(preco) {
  // console.log(preco.includes("R$"));
  return preco.includes("R$");
})

console.log(precosFiltro);


//////////////map

// const precosNumeros = precosfiltro.map(function(preco) {
//   console.log(preco);
//   return Number(preco.replace("R$ ", ""));
// })

// console.log(precosNumeros);

//treinando 
// const precosNumeros = precosFiltro.map(function(preco) {
//   console.log(preco);
//   return Number(preco.replace("R$ ", ""));
// })

// console.log(precosNumeros);

const precosNumeros = precosFiltro.map(function(preco) {
  // console.log(preco.replace("R$ ", ""));
  return Number(preco.replace("R$ ", ""))
})

console.log(precosNumeros);



////////////////////reduce
// const total = precosNumeros.reduce(function(anterior, atual) {
//   console.log(anterior, atual);
//   return anterior + atual;
// }, 0)
// console.log(total);

// Aqui ele já começa por 200, não precisa colocar o 0 no final

//aqui é o exercicio
// const total = precosNumeros.reduce(function(acumulador, itemAtual) {
//   return acumulador + itemAtual;
// });

// console.log(total);

//treinando
// const total = precosNumeros.reduce(function(acumulador, item) {
//   console.log(acumulador, item);
//   return acumulador + item;
// })

// console.log(total);


const total = precosNumeros.reduce(function(acumulador, preco) {
  return acumulador + preco;
})

console.log(total);