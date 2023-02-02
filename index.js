function mudarEstilo() {
    var botao = document.getElementById("botao");
    botao.style.backgroundColor = "red";
    botao.style.color = "white";
  }

function calcular() {
  var folgaEncontrada =  parseFloat(document.getElementById('folgaencontrada').value)
  var pastilhaAtual = parseFloat(document.getElementById('pastilha').value)
  var manual = parseFloat(document.getElementById('manual').value)

  var result = folgaEncontrada + pastilhaAtual - manual

  document.getElementById('result').value = result
}

function apagar() {
        document.getElementById('folgaencontrada').value = ""
        document.getElementById('pastilha').value = ""
        document.getElementById('manual').value = ""
        document.getElementById('result').value = ""
}