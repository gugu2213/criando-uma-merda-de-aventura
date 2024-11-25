// Referências aos elementos do HTML
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

// História do jogo (pode expandir à vontade)
const story = {
    start: {
      text: "Você está em uma floresta misteriosa. Existem dois caminhos: um iluminado e outro escuro. Qual você escolhe?",
      choices: [
        { text: "Seguir o caminho iluminado", next: "lightPath" },
        { text: "Seguir o caminho escuro", next: "darkPath" }
      ]
    },
    lightPath: {
      text: "Você chega a um belo campo. Há uma ponte à frente e uma caverna à direita. Para onde você vai?",
      choices: [
        { text: "Atravesse a ponte", next: "bridge" },
        { text: "Explore a caverna", next: "cave" }
      ]
    },
    darkPath: {
      text: "O caminho escuro está cheio de sons assustadores. Você encontra um baú misterioso. O que você faz?",
      choices: [
        { text: "Abrir o baú", next: "openChest" },
        { text: "Ignorar o baú e continuar", next: "keepWalking" }
      ]
    },
    bridge: {
      text: "Você atravessa a ponte e encontra uma aldeia amigável. Há uma festa acontecendo. Você se junta a eles e termina sua jornada feliz. Fim do jogo!",
      choices: []
    },
    cave: {
      text: "Dentro da caverna, você encontra um dragão adormecido e um tesouro. Parabéns, você venceu!",
      choices: []
    },
    openChest: {
      text: "O baú contém uma armadilha. Uma nuvem de gás venenoso é liberada e você desmaia. Fim do jogo!",
      choices: []
    },
    keepWalking: {
      text: "Você continua caminhando e encontra uma criatura misteriosa que oferece ajuda. Você aceita?",
      choices: [
        { text: "Aceitar ajuda", next: "acceptHelp" },
        { text: "Recusar ajuda", next: "refuseHelp" }
      ]
    },
    acceptHelp: {
      text: "A criatura o guia para um portal mágico que o leva de volta para casa. Você está salvo! Fim do jogo.",
      choices: []
    },
    refuseHelp: {
      text: "Você recusa a ajuda e continua sozinho. Eventualmente, você se perde e nunca mais é visto. Fim do jogo.",
      choices: []
    }
  };
  
// Função para mostrar uma parte da história
function showStory(part) {
  const storyPart = story[part];
  storyText.textContent = storyPart.text;
  choicesContainer.innerHTML = ""; // Limpa os botões anteriores

  storyPart.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showStory(choice.next); // Avança para a próxima parte
    choicesContainer.appendChild(button);
  });
}

// Inicia o jogo na parte inicial
showStory("start");
