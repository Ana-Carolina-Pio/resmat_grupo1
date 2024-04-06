function calcular() {
    var esforcoInterno = parseFloat(document.getElementById('esforco').value);
    var comprimentoBarra = parseFloat(document.getElementById('comprimento').value);

    if (isNaN(esforcoInterno) || isNaN(comprimentoBarra)) {
      alert('Por favor, insira valores válidos para Esforço Interno e Comprimento da Barra.');
      return;
    }

    var resultado = ((esforcoInterno * (comprimentoBarra ^ 2)) / 27906 * 1 ^ 4 );
    document.getElementById('resultado').innerText = 'O resultado é: ' + resultado.toFixed(2);
  }