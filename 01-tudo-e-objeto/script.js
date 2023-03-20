// const menu = {
//   class: ".principal",
//   ativar() {
//     const menuElement = document.querySelector(this.class)
//     // Pra eu selecionar o class que está dentro do objeto, eu uso o this, this que é a mesma coisa que tivesse colocando menu ali.
//     console.log(menuElement);
//   }
// };
// menu.ativar();

// console.log(menu);
// // Para acessar esse class aqui usa o ponto
// console.log(menu.class);

const menu = {
  class: ".principal",
  ativar() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  }
}
menu.ativar();