<!--info-header-start-->
<!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Implemente o genérico `Pick<T, K>` integrado sem usá-lo.

Constrói um tipo escolhendo o conjunto de propriedades `K` de `T`

Por exemplo:

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

<!--info-footer-start-->
<!--info-footer-end-->
