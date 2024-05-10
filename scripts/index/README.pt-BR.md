<p align='center'>
  <img src='./screenshots/logo.svg' width='400'/>
</p>

<p align='center'>Coleção de desafios de tipo em TypeScript</p>

<p align='center'>
  <a href='https://discord.gg/UgKBCq9'>
    <img src='https://img.shields.io/badge/-Discord-yellowgreen?logo=discord&logoColor=white&color=7289da'/>
  </a>
  <a href='https://www.typescriptlang.org/play?install-plugin=%40type-challenges%2Fplayground-plugin'>
    <img src='https://img.shields.io/badge/Playground-143?logo=typescript&color=3178C6&logoColor=fff' />
  </a>
</p>

<br>

<p align='center'>
  <a href='./README.md'>English</a> | <a href='./README.zh-CN.md'>简体中文</a> | <a href='./README.ja.md'>日本語</a> | <a href='./README.ko.md'>한국어</a> | Português
</p>

## Intro
      
<p align='center'>
  <del><em>pelo poder do conhecido sistema de tipos <a href="https://github.com/microsoft/TypeScript/issues/14833">Turing Completed</a> do TypeScript</em></del>
</p>

Tipos de alta qualidade podem ajudar a melhorar a capacidade de manutenção dos projetos, evitando possíveis bugs.

Existem várias bibliotecas incríveis de utilitários de tipos que podem impulsionar seus trabalhos com tipos, como [ts-toolbelt](https://github.com/millsp/ts-toolbelt), [utility-types](https://github.com/piotrwitek/utility-types), [SimplyTyped](https://github.com/andnp/SimplyTyped), etc., que você já pode usar.

Esse projeto tem como objetivo ajudar você a entender melhor como um sistema de tipos funciona, escrevendo seus próprios utilitários, ou apenas se divertindo com os desafios. Nós também tentamos criar uma comunidade onde você pode fazer perguntas e obter respostas de problemas reais - eles podem se tornar parte dos desafios!

## Desafios

> Clique nas etiquetas abaixo para ver detalhes dos desafios.

> **Nota**: Os desafios funcionam em [modo estrito](https://www.typescriptlang.org/tsconfig#strict)

<br>

<!--challenges-start-->
<!--challenges-end-->

> ✨ [Próximos desafios](https://github.com/type-challenges/type-challenges/issues?q=is%3Aissue+is%3Aopen+label%3Anew-challenge)

> 🔥 Comece o desafio no *playground* do [TypeScript](https://www.typescriptlang.org/play?install-plugin=%40type-challenges%2Fplayground-plugin)

> 🚀 Comece o desafio localmente [em sua IDE ou editor de texto com suporte para TypeScript](#play-locally)

> ⚡️ Comece o desafio no [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=YRM.type-challenges)

## Leituras Recomendadas

### Oficial

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

  - [Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
  - [Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
  - [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
  - [Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

- [The New Handbook](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/documentation/copy/en/handbook-v2)

### Artigos

- [Learn Advanced TypeScript Types](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab)
- [The Art of Type Programming](https://mistlog.medium.com/the-art-of-type-programming-cfd933bdfff7)
- [Type Query: jQuery Style Type Manipulation](https://mistlog.medium.com/type-query-jquery-style-type-manipulation-497ce26d93f)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Palestras

- [Type Level Programming in Typescript](https://www.youtube.com/watch?reload=9&v=vGVvJuazs84)

### Projetos / Soluções

- [🎥 Video Explanations and Solutions for every challenge!](https://www.youtube.com/playlist?list=PLOlZuxYbPik180vcJfsAM6xHYLVxrEgHC)
- [Type Challenges Solutions](https://github.com/ghaiklor/type-challenges-solutions)
- [Type Gymnastics](https://github.com/g-plane/type-gymnastics)
- [TypeType Examples](https://github.com/mistlog/typetype-examples)

### Livros

- [Effective TypeScript](https://effectivetypescript.com/)
- [Learning TypeScript](https://www.learningtypescript.com/)
- [TypeScript in 50 Lessons](https://typescript-book.com/)
- [TypeScript Cookbook](https://typescript-cookbook.com/)


## Como Contribuir

Há diversas formas de você contribuir para esse projeto

- Compartilhe suas respostas / soluções
- Proponha novos desafios
- Adicione mais casos de teste aos desafios existentes
- Forneça materiais de estudo ou ideias sobre como resolver desafios
- Compartilhe os problemas reais que você lida em seus projetos, havendo solução ou não - a comunidade poderá te ajudar também
- Ajude os outros com discussões nas *issues*
- Contribua com a infra desse projeto [TODOs.md](./TODOs.md)

Apenas [abra uma *issue*](https://github.com/type-challenges/type-challenges/issues/new/choose) and escolha o template correspondente. Agradecemos!

## Execute Localmente

Você pode fazer a *build* dos desafios e executar localmente em sua IDE ou editor de texto com suporte a TypeScript.

Para fazer isso, você irá precisar da última versão do [Node.js](https://nodejs.org/) e [pnpm](https://pnpm.io/) instaladas.

Após clonar o repositório, instale as dependencias usando:


```bash
pnpm install
```

E depois execute o comando `generate`:

```bash
pnpm generate
```

Isso irá retornar uma lista de linguagens e então, você pode encontrar o desafio gerado na pasta `./playground`.

Se você quiser atualizar o _playground_ mantendo suas alterações:

```bash
pnpm generate --keep-changes
```
ou
```bash
pnpm generate -K
```

## Agradecimentos

Esse projeto nasceu de resoluções de problemas reais com tipos com [@hardfist](https://github.com/hardfist) e [@MeCKodo](https://github.com/MeCKodo). E um muito obrigado para [@sinoon](https://github.com/sinoon) que contribuiu muito ao dar _feedback_ inicial sobre este projeto.

### Inspirado por

- [piotrwitek/utility-types](https://github.com/piotrwitek/utility-types)
- [psmyrdek/typescript-challenges](https://github.com/psmyrdek/typescript-challenges)
- [andnp/SimplyTyped](https://github.com/andnp/SimplyTyped)

### [Contribuidores](https://github.com/type-challenges/type-challenges/graphs/contributors)

![Contributors](https://contrib.rocks/image?repo=type-challenges/type-challenges)

## Licença

MIT
