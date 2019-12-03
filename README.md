# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do
  projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Entregáveis](#6-entregáveis)
* [7. Guias, dicas e leituras
  complementares](#7-guias-dicas-e-leituras-complementares)
* [8. Checklist](#8-checklist)

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


## 2. Resumo do projeto

[Node.js](https://nodejs.org/pt-br/) é um ambiente de execução para JavaScript
construído com o motor de JavaScript V8 do
[Chrome](https://developers.google.com/v8/). Ele nos permite executar o
JavaScript no nosso sistema operacional, seja no seu computador ou em um
servidor, o que nos abre portas para poder interagir com sistemas, arquivos,
redes e etc.

Neste projeto ficamos um pouco longe do navegador para construir um programa
que seja executado com Node.js, em que aprendemos sobre como interagir com
sistemas de arquivos e com o ambiente onde é executado o node (_process_, _env_,
_stdin/stdout/stderr_), ...

Neste projeto foi criada uma ferramenta de linha de comando (CLI), assim como a
sua própria biblioteca (library) em JavaScript.

## 3. Objetivos de aprendizagem

Desenvolver a própria biblioteca é uma experiência fundamental para qualquer
desenvolvedora, pois te obriga a pensar na interface (API) dos seus _módulos_ e
como ela será usada por outras desenvolvedoras. Deve-se levar em conta as
peculiaridades da linguagem, convenções e boas práticas.

### Javascript

* [ ] Uso de callbacks
* [ ] Consumo de Promises
* [ ] Criação de uma Promise
* [ ] Módulos de JS (CommonJS vs ES Modules)

### Node

* [ ] Sistema de arquivos ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] [package.json](https://docs.npmjs.com/files/package.json)
* [ ] criação de módulos [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [ ] Instalar e usar módulos ([npm](https://www.npmjs.com/))
* [ ] [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [ ] CLI (Command Line Interface - Interface de Linha de Comando)
* [ ] [http.get](https://nodejs.org/api/http.html#http_http_get_options_callback)

### Testing

* [ ] Testar suas funções
* [ ] Teste assíncrono
* [ ] Usar biblioteca de mock
* [ ] Mock manual
* [ ] Teste para múltiplos sistemas operacionais

### Git e Github

* [ ] Organização no Github

### Boas práticas de desenvolvimento

* [ ] Modularização
* [ ] Nomenclatura / Semântica
* [ ] Linting

***

## 4. Considerações gerais

* A biblioteca e script executável (ferramenta de linha de comando - CLI) foram implementados em JavaScript para serem executadas com Node.JS. **Foi permitido
  usar bibliotecas externas**.

* O módulo é instalável via `npm install <github-user>/md-links`. O
  módulo inclui um _executável_ que pode ser chamado tanto por linha de
  comando, quanto importado com `require` para ser usado em seu código.

* Os testes unitários cobrem no mínimo 99,9% dos _statements_, _functions_,
  _lines_ e _branches_. Foi utilizado [Jest](https://jestjs.io/)
  para as provas unitárias.

* Neste projeto não foi permitido utilizar `async/await`.

## 5. Critérios de aceitação mínimos do projeto

### Arquivos do projeto

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

### JavaScript API

O módulo pode ser importado em outros scripts Node.js e oferece a
seguinte interface:

#### `mdLinks(path)`

##### Argumento

* `path`: Rota absoluta ou relativa ao arquivo. Se a rota passada é
  relativa, resolve como sendo relativa ao diretório onde foi chamada -
  _current working directory_

##### Valor de retorno

A função retorna uma promessa (`Promise`) que resolve um array (`Array`) e
objetos(`Object`), onde cada objeto representa um link, contendo as seguintes
propriedades:

* `text`: Texto dentro do markdown.
* `href`: URL encontrada.

### CLI (Command Line Interface - Interface de Linha de Comando)

O executável da nossa aplicação pode ser executado da seguinte maneira,
através do terminal:

`md-links <path-to-file> [options]`

O comportamento padrão não valida se as URLs responde ok ou não, somente
identifica o arquivo markdown (a partir da rota que recebeu como
argumento), analisa o arquivo Markdown e imprime os links que vão sendo
encontrados, junto com a rota do arquivo onde aparece e o texto que tem dentro
do link (truncado 50 caracteres).

## 6. Entregáveis

O módulo é instalável via `npm install <github-user>/md-links`. Este
módulo inclui um executável que pode ser chamado tanto por linha de
comando, quanto importado com `require` para usá-lo no seu código.

## 7. Guias, dicas e leituras complementares

### FAQs

#### Como faço para que o meu módulo seja instalável pelo GitHub?

Para que o módulo seja instalável pelo GitHub você tem que:

* Deixar o seu repo público
* Ter um `package.json` válido

Com o comando `npm install <githubname>/<reponame>` podemos instalar diretamente
pelo GitHub. Ver [docs oficiais dp `npm install`
aqui](https://docs.npmjs.com/cli/install)

Por exemplo, o
[`curriculum-parser`](https://github.com/Laboratoria/curriculum-parser) que é
usado para o currículo não está publicado nos registros públicos do NPM, com
isso temos que instalar diretamente desde o GitHub com o commando `npm install
Laboratoria/curriculum-parser`.

### Sugestões de implementação

A implementação deste projeto tem várias partes: ler do sistema de arquivos,
receber argumento através da linha de comando, analisar um teste, fazer
consultas HTTP, ... e tudo isso pode ser feito de muitas formas, tanto com
bibliotecas quanto com JS puro.

Para esse projeto recomendamos o uso de [expressões regulares
(`RegExp`)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

### Tutoriais / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Outros recursos

* [Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)
* [Node.js file system - Documentação oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentação
  oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://pt.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? -
  freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [Node.js – O que é, como funciona e quais as
  vantagens](https://www.opus-software.com.br/node-js/)
* [O que é npm](https://www.hostinger.com.br/tutoriais/o-que-e-npm)
* [Módulos, librerías, paquetes, frameworks... ¿cuál es la
  diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
* [JavaScript assíncrono: callbacks, promises e async
  functions](https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar
  package](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Criando um módulo
  Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Ler um
  arquivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Ler um
  diretório](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [Path](https://nodejs.org/api/path.html)
* [Criando sua CLI com
  Node.js](https://medium.com/henriquekuwai/criando-sua-cli-com-node-js-d6dee7d03110)

## 8. Checklist

### General

* [ ] Poder instalar via `npm install -g <github-user>/md-links`

### `README.md`

* [ ] Um board com o backlog com as implementações da sua biblioteca
* [ ] Documentação técnica da sua biblioteca
* [ ] Guia de uso e instalação da biblioteca

### API `mdLinks(path)`

* [ ] O módulo exporta uma função com a interface (API) esperada
* [ ] Implementa suporte para arquivo individual

### CLI

* [ ] Possuir o executável `md-links` no path (configurado no `package.json`)
* [ ] Executar sem erros e ter o resultado esperado

### Testes

* [ ] Os testes unitários devem cobrir no mínimo 99,9% dos statements, functions,
  lines e branches.
* [ ] Rodar os tests e linter (`npm test`).
