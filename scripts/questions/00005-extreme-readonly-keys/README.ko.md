<!--info-header-start-->
<!--info-header-end-->

객체의 readonly key 유니언을 반환하는 `GetReadonlyKeys<T>` 제네릭을 구현하세요.

예시

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
