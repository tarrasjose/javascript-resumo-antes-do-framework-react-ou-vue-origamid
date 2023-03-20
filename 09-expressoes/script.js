const grupoA = 100;
const grupoB = 300;

// // if não é uma expressão
// if(grupoA > grupoB) {
//   console.log("teste");
// }

// const vencedor = grupoA > grupoB ? "Grupo A ganhou!" : "Grupo B ganhou!";
// console.log(vencedor);

// treinando
const vencedor = grupoA > grupoB ? "Grupo A é o vencedor!" : "Grupo B é o vencedor!";
console.log(vencedor);

///////////

// const areaQuadrado = l => l * l;
// console.log(areaQuadrado(4));

const areaQuadrado = l => l * l;
console.log(areaQuadrado(4));
//////////

// const grupoAvenceu = grupoA > 50 && "Grupo A vencedor";
// // const grupoAvenceu = grupoA > 50 && false; //aqui daria false
// console.log(grupoAvenceu);

const grupoAvenceu = grupoA > 50 && "Grupo A venceu!";
console.log(grupoAvenceu);

//////////////
const numeros = [2, 3, 4, 5, 6, 20, 1];
// const total = numeros.filter(numero => numero > 4);
// console.log(total);


const maioresQue4 = numeros.filter(numero => numero > 4);
console.log(maioresQue4);



