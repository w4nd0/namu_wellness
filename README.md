## Teste Backend Node Namu Wellness

Este projeto é uma API REST para gerenciar programas de bem-estar e suas atividades. Nela o usuario pode cadastrar programas, atividades vinculadas a cada programa e registro de participação dos usuários. Essa atividade foi desenvolvida como parte do processo de seleção da empresa Namu Wellness.

#### Pré-requisitos

Para iniciar o projeto na sua máquina, é necessário que sua máquina tenha instalado o [Node](https://nodejs.org/pt-br) e o [Docker](https://www.docker.com/).


#### Instalação

Para instalar as depêndencias do projeto basta rodar o seguinte comando:
```
npm install
```

Posteriormente suba o container no Docker, com o comando: 

```
docker compose up -d
```
Com esse comando o banco de dados juntamente com as tabelas serão criados,e com isso a aplicação ja estará disponivel para testes.

#### Rotas
É possivel ver os endpoints da api na documentação em http://localhost:3000/api#/

------

Desenvolvido por **Wander Moreira** - [GitHub](https://github.com/w4nd0)


