// function showList(empresa, ...clientes) {
//   console.log(empresa);
//   console.log(clientes);
// }

// showList("Origamid", "João", "Maria");


function showList(empresa, ...clientes) {
  console.log(empresa);
  console.log(clientes);
}

showList("origamid", "Antonio", "carlos")


////////////////////////////////

const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

// console.log(Math.max(numeros));
// console.log(numeros); //O Math não aceita pois é uma array, teria que passar direto assim: Math.max(1, 3, 4);

// // podemos usar então o spread
// console.log(Math.max(...numeros)); // Reposta 45 é o maior

// console.log(numeros);
console.log(Math.max(...numeros));

////////////////////////////////

// const items = document.querySelectorAll("li");
// console.log(items); //items é uma nodeList
// //Formas de transformar items em array:
// // const items = Array.from(document.querySelectorAll("li"));
// //E assim também podemos usar items como array
// [...items].map(item => {
//   console.log(item);
// })

//treinando

const items = document.querySelectorAll("li");
const items2 = Array.from(document.querySelectorAll("li"));
console.log(items2);
[...items].map((item) => {
  console.log(item);
})

/////////////////////////////////

// const carro = { cor: "Azul", portas: 4, ano: 2020 };
// console.log(carro);
// //Para clonar carro:
// // const cloneCarro = { ...carro };
// const cloneCarro = { ...carro, automatico: true }
// console.log(cloneCarro);

//treinando

const carro = {cor: "azul", portas: 4, ano: 2020};
console.log(carro);
const carroClone = { ...carro };
console.log(carroClone);

const carroCloneMais = { ...carro, automatico: true };
console.log(carroCloneMais);


//////////////////////////////////
// class Transporte {
//   constructor() {
//     this.terrestre = true;
//   }
//   andar() {
//     console.log("andou!");
//   }
// }

// class Carro extends Transporte {
//   constructor(cor, portas) {
//     super(); //Sempre que extends usa super
//     this.cor = cor;
//     this.portas = portas;
//   }
// }

// const carro2 = new Carro("vermelho", 4);
// console.log(carro2);
// console.log(carro2.andar());


// const cloneCarro2 = { ...carro2 };
// console.log(cloneCarro2);
// // console.log(cloneCarro2.andar()); o metodo andar não funcionará no clone

//treinando

class Transporte {
  constructor() {
    this.terrestre = true;
  }
  andar() {
    console.log("Andou!");
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const carro2 = new Carro("Prata", 4);
console.log(carro2);
console.log(carro2.andar());

const carro2Clone = { ...carro2 };
console.log(carro2Clone);
