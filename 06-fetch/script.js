//funciona o final, qualquer coisa é só mudar o id e email
// Aqui poderiamos tirar const requisicao pois não usamos pra nada, só deixei pra entender 

// const requisicao = fetch("https://ranekapi.origamid.dev/json/api/produto")
// .then(response => {
//   console.log(response);
//   return response.json();
// }).then(jsonBody => {
//   document.querySelector("#app").innerHTML = jsonBody[0].nome;
//   console.log(jsonBody);
// });
// console.log(requisicao);


const requisicao = fetch("https://ranekapi.origamid.dev/json/api/produto")
.then(response => {
  console.log(response);
  return response.json();
}).then(jsonBody => {
  console.log(jsonBody);
  document.querySelector("#app").innerHTML = jsonBody[0].nome
})

///////////////////////////////////////////////

const data = {
  id: "andrerafa03",
  nome: "Andre",
  email: "andrerafa03@origamid.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "230",
  bairro: "Botafogo",
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro"
};

// fetch("https://ranekapi.origamid.dev/json/api/usuario", {
//   method: "POST",
//   headers: {
//     "content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// });

fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(data)
})