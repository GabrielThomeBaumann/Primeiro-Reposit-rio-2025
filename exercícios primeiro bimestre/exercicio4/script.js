const textos = ["Clique aqui", "Você clicou!", "Clique de novo", "Isso é divertido!", "Continue clicando!"];
let indice = 0;

document.getElementById("meuBotao").addEventListener("click", function() {
    indice = (indice + 1) % textos.length;
    this.textContent = textos[indice];
});
