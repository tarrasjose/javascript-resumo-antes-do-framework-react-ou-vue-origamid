// function handleMouseMove(event) {
//   // console.log(event); 
//   // const clientX = event.clientX;
//   // const clientY = event.clientY;
//   // Ao invés de fazer assim, o javascript tem uma forma de desestrurar isso de uma forma mais simples
//   const {clientX, clientY} = event;
//   // console.log(clientX, clientY);
// }

// document.documentElement.addEventListener("mousemove", handleMouseMove);







///////////////////////////////////
// Outra forma de fazer desestruturar:
// function handleMouseMove2({ clientX, clientY }) {
//   // console.log(clientX, clientY);
// }

// document.documentElement.addEventListener("mousemove", handleMouseMove2)



/////////////////////////////////////////
const frutas = ["Banana", "Uva"];
// const frutas1 = frutas[0];
const [fruta1, fruta2] = frutas
// console.log(fruta1);  
// console.log(fruta2);




//////////////////////////////////
// const useState = [
//   "blue",
//   function(color) {
//     useState[0] = color;
//   }
// ]
// const [color, setColor] = useState;

// console.log(useState);
// setColor("red");
// console.log(useState);

// console.log(color);




