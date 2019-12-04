# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Considerações gerais](#2-considerações-gerais)
* [3. Arquivos do projeto](#3-arquivos-do-projeto)
* [4. Instalação](#4-instalação)
* [5. Como utilizar](#5-como-utilizar)
* [6. Valor de retorno](#6-valor-de-retorno)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que muitas vezes estão
quebrados ou que já não são válidos e isso prejudica muito o valor da
informação que está ali.

## 2. Considerações gerais

A biblioteca e script executável (ferramenta de linha de comando - CLI) foram implementados em JavaScript para serem executadas com Node.JS. 

Foi utilizado o [Jest](https://jestjs.io/) para executar os testes unitários, que cobrem 100% dos _statements_, _functions_,
  _lines_ e _branches_. 

## 3. Arquivos do projeto

* `README.md` com descrição do módulo, instruções de instalação e uso,
  documentação da API e exemplos. Tudo que for relevante para qualquer
  desenvolvedora saber como utilizar a sua biblioteca sem inconvenientes.
* `package.json` possui o nome, versão, descrição, autor, licença,
  dependências e scripts (eslint e test).
* `package-lock.json` arquivo gerado pelo npm, para controle dos pacotes
  instalados
* `.eslintrc` com a configuração para o linter. Este arquivo não deve ser
  alterado.
* `.gitignore` para ignorar o `node_modules` e outras pastas que não devem ser
  incluídas no controle de versão (`git`).
* `cli.js` este arquivo chama a função `mdLinks` que será executada pela
  linha de comando.
* `lib/index.js` criação e exportação da função `mdLinks`.
* `lib/__test__/index.spec.js` contém os testes unitários para a função
  `mdLinks`.

##  4. Instalação

Para usar esta biblioteca, você deve ter instalado os Node.js no seu computador.

O módulo é instalável executando o seguinte comando no terminal:

* npm install -g camilasuehiro/SAP003-md-links.

## 5. Como utilizar

Ao instalar a biblioteca, é possível utilizá-la pelo arquivo executável que pode ser chamado por linha de comando:

* mdLinks <path-to-file>

* $ mdLinks ./some/example.md

## 6. Valor de retorno

A função retorna uma promessa (Promise) com uma array de objetos, em que cada objeto representa um link no arquivo, e contém as seguintes propriedades:

* Title: Texto indicativo do link dentro do markdown.

* URL: URL do link encontrado.