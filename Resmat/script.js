function calcular() {
  var esforcoInterno = parseFloat(document.getElementById('esforco').value);
  var comprimentoBarra = parseFloat(document.getElementById('comprimento').value);
  var tipo = document.getElementById('tipo').value;

  if (isNaN(esforcoInterno) || isNaN(comprimentoBarra)) {
    alert('Por favor, insira valores válidos para Esforço Interno e Comprimento da Barra.');
    return;
  }

  var resultado;

  if (tipo === 'C') {
    resultado = (esforcoInterno * Math.pow(comprimentoBarra, 2)) / (27906 * Math.pow(1, 4));
  } else if (tipo === 'T') {
    resultado = esforcoInterno / comprimentoBarra;
  } else {
    alert('Selecione um tipo entre Compressão (C) ou Tração (T).');
    return;
  }

  document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2);
}

function informacoes() {
  alert("Compressão e tração são termos usados para descrever os tipos de forças que atuam em objetos ou materiais.\n\nCompressão: É uma força que tende a comprimir ou encurtar um objeto ao longo do seu eixo. Por exemplo, quando você empurra as extremidades de um elástico em direção uma à outra, você está aplicando uma força de compressão nele. Em termos de materiais estruturais, como concreto ou aço, a compressão ocorre quando o material é pressionado, fazendo com que ele encurte ou se deforme.\n\nTração: É uma força que tende a esticar ou alongar um objeto ao longo do seu eixo. Quando você puxa um elástico em direções opostas, você está aplicando uma força de tração nele. Em termos de materiais estruturais, a tração ocorre quando o material é esticado, fazendo com que ele se alongue ou se deforme.\n\nAmbas as forças são fundamentais na engenharia e na análise de estruturas, pois ajudam a entender como os materiais se comportam sob diferentes condições de carga.");
}