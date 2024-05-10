<p align='center'>
  <img src='./screenshots/logo.svg' width='400'/>
</p>

<p align='center'>Collection of TypeScript type challenges</p>

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
  English | <a href='./README.zh-CN.md'>简体中文</a> | <a href='./README.ja.md'>日本語</a> | <a href='./README.ko.md'>한국어</a> | <a href='./README.pt-BR.md'>Português</a>
</p>

## Intro

<p align='center'>
  <del><em>by the power of TypeScript's well-known <a href="https://github.com/microsoft/TypeScript/issues/14833">Turing Completed</a> type system</em></del>
</p>

High-quality types can help improve projects' maintainability while avoiding potential bugs.

There are a bunch of awesome type utility libraries that may boost your works on types, like [ts-toolbelt](https://github.com/millsp/ts-toolbelt), [utility-types](https://github.com/piotrwitek/utility-types), [SimplyTyped](https://github.com/andnp/SimplyTyped), etc., which you can already use.

This project is aimed at helping you better understand how the type system works, writing your own utilities, or just having fun with the challenges. We are also trying to form a community where you can ask questions and get answers you have faced in the real world - they may become part of the challenges!

## Challenges

> Click the following badges to see details of the challenges.

> **Note**: Challenges work in the [strict mode](https://www.typescriptlang.org/tsconfig#strict).

<br>

<!--challenges-start-->
<!--challenges-end-->

> ✨ [Upcoming challenges](https://github.com/type-challenges/type-challenges/issues?q=is%3Aissue+is%3Aopen+label%3Anew-challenge)

> 🔥 Start the challenge in [TypeScript Playground](https://www.typescriptlang.org/play?install-plugin=%40type-challenges%2Fplayground-plugin)

> 🚀 Start the challenge locally in [your IDE or text editor with TypeScript language support](#play-locally)

> ⚡️ Start the challenge in [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=YRM.type-challenges)

## Recommended Readings

### Official

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

  - [Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
  - [Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
  - [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
  - [Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

- [The New Handbook](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/documentation/copy/en/handbook-v2)

### Articles

- [Learn Advanced TypeScript Types](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab)
- [The Art of Type Programming](https://mistlog.medium.com/the-art-of-type-programming-cfd933bdfff7)
- [Type Query: jQuery Style Type Manipulation](https://mistlog.medium.com/type-query-jquery-style-type-manipulation-497ce26d93f)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Talks

- [Type Level Programming in Typescript](https://www.youtube.com/watch?reload=9&v=vGVvJuazs84)

### Projects / Solutions

- [🎥 Video Explanations and Solutions for every challenge!](https://www.youtube.com/playlist?list=PLOlZuxYbPik180vcJfsAM6xHYLVxrEgHC)
- [Type Challenges Solutions](https://github.com/ghaiklor/type-challenges-solutions)
- [Type Gymnastics](https://github.com/g-plane/type-gymnastics)
- [TypeType Examples](https://github.com/mistlog/typetype-examples)

### Books

- [Effective TypeScript](https://effectivetypescript.com/)
- [Learning TypeScript](https://www.learningtypescript.com/)
- [TypeScript in 50 Lessons](https://typescript-book.com/)
- [TypeScript Cookbook](https://typescript-cookbook.com/)


## How to Contribute

There are several ways you can contribute to this project

- Share your answers / solutions
- Propose new challenges
- Add more test cases to the existing challenges
- Provide learning resources or ideas of how to solve challenges
- Share the problems you have faced in real-world projects, regardless you having the solution or not - the community would help you as well
- Help with others by discussion in issues
- Contribute the infra of this project [TODOs.md](./TODOs.md)

Just [open an issue](https://github.com/type-challenges/type-challenges/issues/new/choose) and choose the corresponding template. Thanks!

## Play Locally

You can build the challenges and play locally using your preferred IDE or text editor with TypeScript language support.

To do that, you will need the latest version of [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed.

After cloning the repo, installed the dependencies by:

```bash
pnpm install
```

Then and run the `generate` script:

```bash
pnpm generate
```

It will prompt you to select the desired language, then you can find the generated challenges in the `./playground` folder.

Later if you want to update playground while keeping your changes:

```bash
pnpm generate --keep-changes
```
OR
```bash
pnpm generate -K
```

## Thanks

This project was born from solving real-world types problem with [@hardfist](https://github.com/hardfist) and [@MeCKodo](https://github.com/MeCKodo). And great thanks to [@sinoon](https://github.com/sinoon) who contributed a lot while giving early feedback on this project.

### Inspired by

- [piotrwitek/utility-types](https://github.com/piotrwitek/utility-types)
- [psmyrdek/typescript-challenges](https://github.com/psmyrdek/typescript-challenges)
- [andnp/SimplyTyped](https://github.com/andnp/SimplyTyped)

### [Contributors](https://github.com/type-challenges/type-challenges/graphs/contributors)

![Contributors](https://contrib.rocks/image?repo=type-challenges/type-challenges)

## License

MIT
