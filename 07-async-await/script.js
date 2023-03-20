//ao invés de usar then, podemos fazer o código mais limpo usando async

// async function fetchProdutos(url) {
//   const response = await fetch(url);
//   console.log(response);
//   const jsonBody = await response.json();
//   console.log(jsonBody);
//   return jsonBody;
// }

// const requisicao = fetchProdutos("https://ranekapi.origamid.dev/json/api/produto");

// console.log(requisicao); //Aqui retorna uma promessa, somente o que tá na function espera

// // Se quiser que venha a resposta, pode usar assim:
// requisicao.then(response => {
//   console.log(response);
// })

async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

const requisicao = fetchProdutos("https://ranekapi.origamid.dev/json/api/produto");

requisicao.then(response => {
  console.log(response);
})