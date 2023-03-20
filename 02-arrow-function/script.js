// function upperName(name) {
//   return name.toUpperCase();
// }
// console.log(upperName("André"));

function upperName(name) {
  return name.toUpperCase();
}
console.log(upperName("Andre"));



/////////////

// const upperName2 = function(name) {
//   return name.toUpperCase();
// }
// console.log(upperName2('Tárras'));

const upperName2 = function(name) {
  return name.toUpperCase();
}

console.log(upperName2("Tárras"));



////////////

// const upperName3 = (name) => {
//   return name.toUpperCase();
// }
// console.log(upperName3('José'));

const upperName3 = (name) => {
  return name.toUpperCase();
}

console.log(upperName3('josé'));



////////////
// const upperName4 = name => name.toUpperCase();
// console.log(upperName4('origamid'));

const upperName4 = name => name.toUpperCase();
console.log(upperName4('origamid'));

// const countLetters = word => word.length;
// console.log(countLetters('origamid'));

const countLetters = word => word.length;
console.log(countLetters('origamid'));

///////////////////////////////////////////

// A principal diferença de usar uma função criada com uma arrow function e uma função normal

// class Menu {
//   constructor(menu) {
//     this.menuElement = document.querySelector(menu);
//   }
//   addActiveEvent() {
//     this.menuElement.addEventListener("click", function(event) {
//       event.target.classList.add("active");
//       // event.target o menu
//     })
//   }
// }
// const menu = new Menu(".principal");
// menu.addActiveEvent();
// console.log(menu);




/////Agora vamos fazer o exemplo acima com class dentro do menu
// class Menu2 {
//   constructor(menu) {
//     this.menuElement = document.querySelector(menu);
//     this.activeClass = "active";
//     console.log(this); //Menu2 {menuElement: nav.principal, activeClass: 'active'}
//   }
//   addActiveEvent() {
//     this.menuElement.addEventListener("click", function(event) {
//       // this.activeClass não funcionará aqui
//       console.log(this); // <nav class="principal undefined">Menu Principal</nav>
//       event.target.classList.add(this.activeClass);
//       // event.target o menu
//     })
//   }
// }
// const menu2 = new Menu2(".principal");
// menu2.addActiveEvent();
// console.log(menu2);



//usando arrow function ele não cria um novo this

class Menu3 {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
    console.log(this); //Menu2 {menuElement: nav.principal, activeClass: 'active'}
  }
  addActiveEvent() {
    this.menuElement.addEventListener("click", (event) => {
      // this.activeClass não funcionará aqui
      // A diferença está aqui o console log continua sendo o que era ali em cima, no exemplo anterior não.
      console.log(this); // Menu2 {menuElement: nav.principal, activeClass: 'active'}
      event.target.classList.add(this.activeClass);
      // event.target o menu
    });
  }
}
const menu3 = new Menu3(".principal");
menu3.addActiveEvent();
// console.log(menu2);

