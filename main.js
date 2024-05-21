const form = document.getElementById("tarefa-form");
let linhas = '';

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputNomeTarefa = document.getElementById('task-form');

  let linha = '<tr>';
linha += `<td>${inputNomeTarefa.value}</td>`;
linha += `</tr>`;

linhas += linha;

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;
  
});