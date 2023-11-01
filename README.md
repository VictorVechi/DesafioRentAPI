<div>

# Desafio Rentcars
<p>
Esse projeto foi desenvolvido pensando proposto pela Rentcars, a seguir estão as informações e softwares necessários para executar o projeto.
</p>

## Requisitos
<p>
Para executar o projeto em sua máquina é necessário ter as ferramentas a seguir instaladas em seu computador:
</p>
<ul> 
    <li>Node</li>
    <li>Docker</li>
</ul>

## Stacks

Foi utilizado no projeto as stacks a seguir:

- [Node][https://nodejs.org/en/about]
- [Javascript][https://developer.mozilla.org/pt-BR/docs/Web/JavaScript]
- [Insomnia][https://insomnia.rest/]
- [MySql][https://www.mysql.com/]
- [Docker][https://www.docker.com/]
- [JS | Express][https://expressjs.com/pt-br/starter/installing.html]
- [JS | Sequelize][https://sequelize.org/]


## Como executar o projeto

1. Clonaremos o repositório para podermos executar localmente
```bash
# Clonando o repositório
$ git clone https://github.com/VictorVechi/DesafioRentAPI.git
$ cd DesafioRentAPI
```
<p><strong>Todos os comandos a seguir deverão ser executados na pasta do projeto</strong></p>

2. Iremos instalar as dependências necessárias para o projeto executando o comando a seguir

```bash
# Instalando as dependências
$ npm install
```
3. Antes de executarmos a api, é necessário criar a imagem e o container do docker. Abaixo segue os comandos necessários
```bash
# Para Windows, é necessário abrir o Docker Desktop antes de executar os comandos
# Para Linux, é só executar os comandos normalmente
# Criando o banco de dados com docker
$ docker build -t banco_desafio ./
$ docker-compose up
```

4. Agora iremos iniciar a API
```bash
$ npm start
```
## Rotas

<p>As seguintes rotas estão disponíveis para a API:</p>
<ul>
<li>GET http://localhost:3000/veiculos</li>
<li>GET http://localhost:3000/veiculos/id</li>
<li>POST http://localhost:3000/veiculos</li>
<li>PUT http://localhost:3000/veiculos/id</li>
<li>DELETE http://localhost:3000/veiculos/id</li>
</ul>

<u>GET</u>: Rota para obter registros do banco de dados

<u>POST</u>: Rota para cadastrar dados no banco

<u>PUT</u>: Rota para atualizar dados no banco

<u>DELETE</u>: Rota para deletar registros do banco

<p>Para utilizá-las, apenas substitua o "id" pelo id desejado.</p>
<p>Exemplo:</p>

```bash
http://localhost:3000/veiculos/6998c2bf-b4cd-4c41-a05c-7fe99c510ec7
```

## Exemplos de uso

### POST - Rota '/veiculos'

#### Entrada

```json
TODOS OS CAMPOS DEVEM EXISTIR!
{
 "locadora": "Movida",
 "modelo": "Virtus",
 "marca": "Volkswagen",
 "ano": 2023,
 "motor": "1.0",
 "portas": 4,
 "cambio": "Automatico",
 "ar_condicionado": true
}
```

#### Saida

```json
{
 "error":false,
 "message":"'Veículo criado com sucesso'"
}
```

### GET - Rota '/veiculos'

* A rota GET retorna todos os veículos cadastrados no banco de dados

#### Saida
```json
{
 "id": "6998c2bf-b4cd-4c41-a05c-7fe99c510ec7",
 "locadora": "Movida",
 "modelo": "Virtus",
 "marca": "Volkswagen",
 "ano": 2023,
 "motor": "1.0",
 "portas": 4,
 "cambio": "Automatico",
 "ar_condicionado": true,
 "createdAt": "2023-10-31T13:36:47.000Z",
 "updatedAt": "2023-10-31T13:36:47.000Z"
}
```

### GET - Rota '/veiculos/:id'

* A rota GET com ID retorna apenas o veículo com o id informado

#### Ex rota:
/veiculos/6998c2bf-b4cd-4c41-a05c-7fe99c510ec7

#### Saida
```json
{
 "id": "6998c2bf-b4cd-4c41-a05c-7fe99c510ec7",
 "locadora": "Movida",
 "modelo": "Virtus",
 "marca": "Volkswagen",
 "ano": 2023,
 "motor": "1.0",
 "portas": 4,
 "cambio": "Automatico",
 "ar_condicionado": true,
 "createdAt": "2023-10-31T13:36:47.000Z",
 "updatedAt": "2023-10-31T13:36:47.000Z"
}
```

### PUT - Rota '/veiculos/:id'

* A rota PUT com ID atualiza os dados do veículo com o id informado

#### Ex rota:
/veiculos/6998c2bf-b4cd-4c41-a05c-7fe99c510ec7

#### Entrada
```json
TODOS OS CAMPOS DEVEM EXISTIR!
{
 "locadora": "Movida",
 "modelo": "Lancer",
 "marca": "Mitsubishi",
 "ano": 2023,
 "motor": "1.6",
 "portas": 4,
 "cambio": "Automatico",
 "ar_condicionado": false
}
```

### Saida

```json
{
 "error":false,
 "message":"Veículo atualizado com sucesso"
}
```

### DELETE - Rota '/veiculos/:id'

* A rota DELETE com ID deleta o veículo com o id informado

#### Ex rota:
/veiculos/6998c2bf-b4cd-4c41-a05c-7fe99c510ec7

### Saida

```json
{
 "error":false,
 "message":"Veículo deletado com sucesso"
}
```

Desenvolvido por: Victor Henrique Vechi da Silva
</div>
