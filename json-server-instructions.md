# json-server

O json-server é uma ferramenta que permite a criação rápida de uma API RESTful a partir de um arquivo JSON. É útil para prototipagem rápida, desenvolvimento front-end, testes e mock de APIs. Ele cria um servidor local que simula operações CRUD (Create, Read, Update, Delete) básicas em dados armazenados em um arquivo JSON.

## Características principais do json-server:

- **Simplicidade**: Fácil de configurar e usar, requer apenas um arquivo JSON com dados estruturados.
- **Rapidez**: Permite criar uma API funcional em poucos minutos.
- **Flexibilidade**: Suporta várias operações de CRUD e permite filtros e paginação.
- **Extensibilidade**: Pode ser personalizado com middlewares e outras configurações.

## Como usar o json-server:

### Instalação

Instale globalmente usando npm:

    npm install -g json-server


### Criação do arquivo JSON
Crie um arquivo JSON (db.json) com a estrutura de dados que deseja simular. Por exemplo:

    {
      "alunos": [
        {
          "id": 1,
          "nome": "Pedro",
          "serie": "5ª Série"
        },
        {
          "id": 2,
          "nome": "Maria",
          "serie": "6ª Série"
        }
      ]
    }    


### Iniciar o servidor
Inicie o json-server apontando para o arquivo JSON:


    json-server --watch db.json --port 3000

Isso criará um servidor local que responde a solicitações HTTP na porta especificada (neste caso, 3000). A URL base será http://localhost:3000.

### Usar a API
A partir de agora, você pode fazer requisições HTTP para a API simulada. Por exemplo:

<ul>
<li>GET http://localhost:3000/alunos: Retorna a lista de alunos.</li>
<li>GET http://localhost:3000/alunos/1: Retorna o aluno com id 1.</li>
<li>POST http://localhost:3000/alunos: Adiciona um novo aluno.</li>
<li>PUT http://localhost:3000/alunos/1: Atualiza o aluno com id 1.</li>
<li>DELETE http://localhost:3000/alunos/1: Deleta o aluno com id 1.</li>

</ul>