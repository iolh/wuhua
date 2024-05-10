<!--info-header-start-->
<!--info-header-end-->

Hello, World!

Type Challenges では、型システム自体を使用してアサーションを実行します。

この課題では、次のコードを変更してテストに合格する必要があります（型チェックエラーなし）。

```ts
// expected to be string
type HelloWorld = any
```

```ts
// you should make this work
type test = Expect<Equal<HelloWorld, string>>
```

「挑戦する」ボタンをクリックしてコーディングを開始してください！ Happy Hacking！

<!--info-footer-start-->
<!--info-footer-end-->
