function calcular() {
  var esforcoInterno = parseFloat(document.getElementById('esforco').value);
  var comprimentoBarra = parseFloat(document.getElementById('comprimento').value);
  /*var tipo = parseFloat(document.getElementById('tipo').value);*/
  
  if (isNaN(esforcoInterno) || isNaN(comprimentoBarra)) {
    alert('Por favor, insira valores válidos para Esforço Interno e Comprimento da Barra.');
    return;
  }

/*  var resultado;
  if (tipo === 'C') {
    resultado = (esforcoInterno * Math.pow(comprimentoBarra, 2)) / (27906 * Math.pow(1, 4));
  } else if (tipo === 'T') {
    resultado = (esforcoInterno/comprimentoBarra)
  } else {
    alert('Insira um "tipo" entre T(Tração) ou C(Compressão).');
    return;
  }
*/
  var resultado = (esforcoInterno * Math.pow(comprimentoBarra, 2)) / (27906 * Math.pow(1, 4));
  document.getElementById('resultado').innerText = 'O resultado é: ' + resultado.toFixed(2);
}