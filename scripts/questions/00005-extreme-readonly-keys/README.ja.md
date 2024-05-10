<!--info-header-start-->
<!--info-header-end-->

オブジェクトの読み取り専用キーの Union を返す汎用的な `GetReadonlyKeys<T>` を実装してください。

例えば

```ts
interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
```

<!--info-footer-start-->
<!--info-footer-end-->
