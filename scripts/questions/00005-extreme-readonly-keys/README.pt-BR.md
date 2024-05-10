<!--info-header-start-->
<!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Implemente um `GetReadonlyKeys<T>` genérico que retorne uma união das chaves somente leitura de um Objeto.

Por exemplo

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
