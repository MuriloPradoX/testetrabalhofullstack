const form = document.getElementById('cadastro-pessoa');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const telefone = document.getElementById('telefone').value;

  fetch('/pessoa', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, cpf, telefone })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
});