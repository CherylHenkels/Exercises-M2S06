/* LabScore pt.1 - Exercício 1 */
let listaNotas = [8, 10, 7, 5];

function calculaMedia(notas) {
  let soma = 0;
  for(let i=0; i<notas.length; i++){
    soma += notas[i]
  }
  let media = soma / notas.length;
  return media;
}

let mediaNotas = calculaMedia(listaNotas);

/* LabScore pt.1 - Exercício 2 */
function resultadoFinal(media) {
  return media >= 7
    ? `<p>Média: <strong>${media}</strong>.<br> Parabéns, você passou na média!</p>`
    : `<p>Média: <strong>${media}</strong>.<br> Infelizmente você está de recuperação.</p>`;
}

/* LabScore pt.1 - Exercício 3 */
let listaAlunos = ["Pedro", "Maria", "João", "Paula"];

function imprimirNomes(nomes) {
  return nomes.forEach((aluno) => {
    document.write(`${aluno}<br>`);
  });
}

/* LabScore pt.1 - Exercício 4 */
function tabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    document.write(`${numero} x ${i} = ${resultado}<br>`);
  }
}

/* LabScore pt.1 - Exercício 5 */
function entrevistaAluno() {
  let nome = window.prompt("Qual o nome do aluno?");
  let idade = window.prompt("Qual a idade do aluno?");
  let serie = window.prompt("Qual a série do aluno?");
  let escola = window.prompt("Qual o nome da escola?");
  let materia = window.prompt("Qual a sua matéria favorita?");

  let spanNome = document.getElementById("nome");
  let spanIdade = document.getElementById("idade");
  let spanSerie = document.getElementById("serie");
  let spanEscola = document.getElementById("escola");
  let spanMateria = document.getElementById("materia");

  let dadosAluno = `Você confirma os dados inseridos?
    Nome do aluno: ${nome}
    Idade do aluno: ${idade}
    Série do aluno: ${serie}
    Nome da escola: ${escola}
    Matéria favorita: ${materia}`;

  let confirmacao = window.confirm(dadosAluno);

  if (confirmacao) {
    spanNome.innerText = nome;
    spanIdade.innerText = idade;
    spanSerie.innerText = serie;
    spanEscola.innerText = escola;
    spanMateria.innerText = materia;
  } else {
    window.alert(`Os dados não foram confirmados. Não há dados para exibir.`);
  }

}

/* LabScore pt.1 - Exercício 6 */
//let materiasMedia = [];

// function notasMateria() {
//   let materia = window.prompt("Qual o nome da matéria?");
//   let notas = [];
//   let i = 0;
//   while (i < 4) {
//     let nota = parseFloat(window.prompt("Informe a nota " + (i + 1) + ":"));
//     notas.push(nota);
//     i++;
//   }

// let dadosMateria = {
//   nomeMateria: materia,
//   notas: notas,
// };

// let media = calculaMedia(dadosMateria.notas);

// materiasMedia.push(media);

// adicionarLinhaTabela(dadosMateria,media);

// exibirMediaGeral();
// exibirMaiorMedia();
// }

function adicionarMateria() {
  let nome = prompt("Qual o nome da matéria?");
  let nota1 = parseFloat(prompt("Informe a nota 1:"));
  let nota2 = parseFloat(prompt("Informe a nota 2:"));
  let nota3 = parseFloat(prompt("Informe a nota 3:"));
  let nota4 = parseFloat(prompt("Informe a nota 4:"));

  let novaMateria = {
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    nota3: nota3,
    nota4: nota4
  };

  let materias = JSON.parse(localStorage.getItem('materias')) || [];
  materias.push(novaMateria);
  localStorage.setItem('materias', JSON.stringify(materias));

  adicionarLinhaTabela(novaMateria, calculaMedia([nota1, nota2, nota3, nota4]));

}





/* LabScore pt.1 - Exercício 7 */
function encontrarMaiorNumero(numeros) {
  let maiorNumero = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }

  return maiorNumero;
}



//------------------ Mini-projeto ------------------//

// LabScore pt.2 - Exercício 2
// entrevistaAluno();

// LabScore pt.2 - Exercício 4

const botao = document.getElementById("add-notas");
botao.addEventListener("click",  adicionarMateria);

function adicionarLinhaTabela(dadosMateria, media ){
let tagTbody = document.querySelector("section.notas tbody");
tagTbody.innerHTML += `
  <tr>
  <td>${dadosMateria.nome}</td>
  <td>${dadosMateria.nota1}</td>
  <td>${dadosMateria.nota2}</td>
  <td>${dadosMateria.nota3}</td>
  <td>${dadosMateria.nota4}</td>
  <td>${media}</td>
  </tr>
  `;
 // Atualização dos parãmetros ao adicionar linha
 acoesMediasMaterias();
}

// LabScore pt.2 - Exercício 5 e 6

// function exibirMediaGeral() {
//   const mediaGeral = calculaMedia(materiasMedia);

//   document.getElementById("media-geral").textContent = `A média geral do aluno é ${mediaGeral}`;
// }

// LabScore pt.2 - Exercício 7

// function exibirMaiorMedia(){
//   const maiorMedia = encontrarMaiorNumero(materiasMedia);

//   document.getElementById("maior-media").textContent = `A maior média entre as médias é ${maiorMedia}`;
// }


// labscore pt3 - Exercício 2
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('cep').addEventListener('blur', function() {
  const cep = this.value.replace(/\D/g, '');
  if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
              if (!data.erro) {
                  document.getElementById('rua').value = data.logradouro;
                  document.getElementById('cidade').value = data.localidade;
                  document.getElementById('estado').value = data.uf;
              } else {
                  alert('CEP não encontrado!');
              }
          })
          .catch(error => console.error('Erro ao buscar o CEP:', error));
  } else {
      alert('CEP inválido!');
  }
});
});

// labscore pt3 - Exercício 3

function saveLocalStorage(identification){
  let campo = document.getElementById(identification);
  console.log(campo.id )
  localStorage.setItem(identification, JSON.stringify(campo.value));
}

function saveAllInfosLocalStorage(){
saveLocalStorage("nome");
saveLocalStorage("idade");
saveLocalStorage("serie");
saveLocalStorage("escola");
saveLocalStorage("materia-favorita");
saveLocalStorage("cep");
saveLocalStorage("rua");
saveLocalStorage("cidade");
saveLocalStorage("estado");
window.location.href = "index.html";
}


// labscore pt3 - Exercício 5
let materias = [
  { nome: "Matemática", nota1: 8, nota2: 7, nota3: 9, nota4: 6 },
  { nome: "Português", nota1: 7, nota2: 8, nota3: 6, nota4: 7 },
  { nome: "Ciências", nota1: 9, nota2: 9, nota3: 8, nota4: 7 },
  { nome: "História", nota1: 8, nota2: 8, nota3: 7, nota4: 7 }
];

// Salvar no localStorage
localStorage.setItem('materias', JSON.stringify(materias));

function carregarMaterias() {
  let materiasCarregadas = JSON.parse(localStorage.getItem('materias')) || [];
  let tagTbody = document.querySelector("section.notas tbody");
  tagTbody.innerHTML = ''; // Limpa a tabela
  
  materiasCarregadas.forEach((materia) => {
    let mediaMateria = calculaMedia([materia.nota1, materia.nota2, materia.nota3, materia.nota4]);
    adicionarLinhaTabela(materia, mediaMateria);
  });
 
}

carregarMaterias();

// labscore pt3 - Exercício 6

function acoesMediasMaterias(){
  let materiasSalvasLocalStorage = JSON.parse(localStorage.getItem('materias')) || [];

  let listaMediasMaterias = [];
  materiasSalvasLocalStorage.forEach((materia) => {
    let mediaMateria = calculaMedia([materia.nota1, materia.nota2, materia.nota3, materia.nota4]);
    listaMediasMaterias.push(mediaMateria);
  });
 
  exibirMediaGeral(listaMediasMaterias);
  exibirMaiorMedia(listaMediasMaterias);

}

function exibirMediaGeral(listaMediasMaterias){
  const mediaGeral = calculaMedia(listaMediasMaterias);
  document.getElementById("media-geral").textContent = `A média geral do aluno é ${mediaGeral}`;
  
}


function exibirMaiorMedia(listaMediasMaterias){
  const maiorMedia = encontrarMaiorNumero(listaMediasMaterias);

  document.getElementById("maior-media").textContent = `A maior média entre as médias é ${maiorMedia}`;
}





// function calculaMediaMaterias(){
//   let materiasLocalStorage = JSON.parse(localStorage.getItem('materias')) || [];
//   let soma = 0;
//   materiasLocalStorage.forEach(materia => {
//     soma+=
//   })
// }