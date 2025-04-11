# BuscaCNPJ

Este é um projeto de API para consulta de dados de CNPJs brasileiros, desenvolvido por Gustavo Kurtz. A aplicação utiliza o NestJS como framework backend e consome a Brasil API para obter informações detalhadas de empresas a partir do número de CNPJ.

## Funcionalidades

- Consulta de dados de empresas brasileiras por CNPJ
- Retorna informações simplificadas e essenciais das empresas
- Implementação de rate limiting para prevenir abusos na API

## Tecnologias utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js para construção de aplicações server-side
- [@nestjs/axios](https://www.npmjs.com/package/@nestjs/axios) - Módulo HTTP para NestJS
- [@nestjs/throttler](https://www.npmjs.com/package/@nestjs/throttler) - Módulo para rate limiting
- Brasil API - Fonte de dados para informações de CNPJs

## Estrutura do projeto

O projeto segue a estrutura padrão de aplicações NestJS, organizada em módulos:

- **cnpj** - Módulo responsável pela consulta de CNPJs
 - **controller** - Gerencia as rotas relacionadas a CNPJs
 - **service** - Implementa a lógica de negócio para consulta de CNPJs
 - **dto** - Define a estrutura de dados para respostas da API

## Configuração e execução

### Pré-requisitos

- Node.js (versão compatível com NestJS 11)
- NPM ou Yarn

### Instalação

# Instalar as dependências
npm install

# Modo desenvolvimento
npm run start

# Modo desenvolvimento com watch
npm run start:dev

# Modo produção
npm run start:prod

### Rotas
GET /cnpj/00000000000191


