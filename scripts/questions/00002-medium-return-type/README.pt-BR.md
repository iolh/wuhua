<!--info-header-start-->
<!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Implemente o genérico `ReturnType<T>` integrado sem usá-lo.

Por exemplo

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
