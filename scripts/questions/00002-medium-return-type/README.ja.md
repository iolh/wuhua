<!--info-header-start-->
<!--info-header-end-->

組み込みの型ユーティリティ`ReturnType<T>`を使用せず、`T`の戻り値の型を取得する型を実装します。

例えば

```ts
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
```

<!--info-footer-start-->
<!--info-footer-end-->
