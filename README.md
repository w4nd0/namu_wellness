## Teste Backend Node Namu Wellness

Este projeto é uma API REST para gerenciar programas de bem-estar e suas atividades. Nela o usuário pode cadastrar programas, atividades vinculadas a cada programa e registro de participação dos usuários. Essa atividade foi desenvolvida como parte do processo de seleção da empresa Namu Wellness.

#### Pré-requisitos

Para iniciar o projeto na sua máquina, é necessário que sua máquina tenha instalado o [Node](https://nodejs.org/pt-br) e o [Docker](https://www.docker.com/).


#### Instalação

Para instalar as dependências do projeto basta rodar o seguinte comando:

```
npm install
```

Também é preciso criar um `.env` com as informações do banco de dados, seguindo o exemplo contido no `.env.example`.

Posteriormente suba o contêiner no Docker, com o comando: 

```
docker compose up -d
```

Com isso a aplicação já estará disponível para ser executada.

#### Executando
Para rodar o serviço execute na linha de comando:

```
npm run start
```

E Para rodar os teste:

```
npm run test
```

#### Rotas
É possível ver os endpoints da api na documentação em http://localhost:3000/api#/

------

Desenvolvido por **Wander Moreira** - [GitHub](https://github.com/w4nd0)


