const express = require('express');
const app = express();
const sequelize = require('sequelize');

const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const db = new sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Modelo de dados Pessoa
const Pessoa = db.define('Pessoa', {
  nome: {
    type: Sequelize.STRING
  },
  cpf: {
    type: Sequelize.STRING
  },
  telefone: {
    type: Sequelize.STRING
  }
});

// Rota para servir a página de cadastro
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para criar uma nova pessoa
app.post('/pessoa', (req, res) => {
  const { nome, cpf, telefone } = req.body;
  Pessoa.create({ nome, cpf, telefone })
    .then(pessoa => res.json(pessoa))
    .catch(err => res.status(500).json({ message: 'Erro ao criar pessoa' }));
});

// Inicializar servidor
app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));