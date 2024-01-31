const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar a escolha do treinador
rl.question("Escolha o seu Pokemon: ", function(escolha) {
  escolha = parseInt(escolha);

  // Verificar a escolha e exibir a mensagem correspondente
  let pokemonEscolhido;
  switch (escolha) {
    case 1:
      pokemonEscolhido = "Bulbasaur";
      break;
    case 2:
      pokemonEscolhido = "Charmander";
      break;
    case 4:
      pokemonEscolhido = "Pikachu";
      break;
    case 5:
      pokemonEscolhido = "Mewtwo";
      break;
    default:
      console.log("Escolha inválida. Por favor, escolha entre 1, 2, 4 ou 5.");
      // Encerrar o programa ou tomar outras medidas, se necessário
      process.exit(1);
  }

  // Exibir a mensagem de boas-vindas
  if (pokemonEscolhido) {
    console.log("Você escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
  }

  rl.close();
});
