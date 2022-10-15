//Função que é chamada
function sacar(){
  // Variaveis para saber as notas, contar notas e mensagem
  const arrayNotas = [100, 50, 20, 10, 5];
  var countNotas = [];
  var callback = "";

  // Pegar o valor digtado no input
  var valor = document.getElementById("valor").value

  // Percorrer Array de notas
  for (let i = 0; i < arrayNotas.length; i++) {
    //contador de notas
    let counter = 0

    // Pegar valor, verificar se é maior que a nota e se for retirar o valor e contar uma nova
    while (valor >= arrayNotas[i]) {
      valor = valor - arrayNotas[i];
      counter++
    }

    // Adicionar quantidade de notas no array de contas
    countNotas.push(counter)
  }


  // Percorrer o array das notas contadas
  for (let i = 0; i < countNotas.length; i++) {

    // Se a quantidade de notas for igual a 1 mostrar a mensagem no singular
    if(countNotas[i] == 1) {
      // Criar mensagem da quantidade de notas
      let formater = `${countNotas[i]} nota de ${arrayNotas[i]} reais, `
      // Editar uma varivel de string salvando as mensagens
      callback = callback + formater

    // Se for maior que 1 mostrar no plural
    } else if (countNotas[i] > 1) {
      // Criar mensagem da quantidade de notas
      let formater = `${countNotas[i]} notas de ${arrayNotas[i]} reais, `
      // Editar uma varivel de string salvando as mensagens
      callback = callback + formater
    }
  }

  // Pegar a variavel de que está a mensagem e tirar o ", " do final
  let result = callback.substring(0, callback.length - 2)
  
  // Colocar a variavel no HTML
  document.getElementById("texto").innerText = result != "" ? result : "Notas disponíveis: R$100, R$50, R$20, R$10 e R$5";
}