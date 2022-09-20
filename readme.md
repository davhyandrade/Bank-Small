# Banco fictício para a gestão de dados

> Status: Concluded

## Bank Small

<img src="https://i.postimg.cc/prgzH5Yy/bank-small.png" alt="bank-small" width="100%">

A Bank Small é uma empresa que usa a tecnologia e design para devolver às pessoas o controle sobre suas informações pessoais.

Projeto ao qual simula um banco fictício que é encarregado pela gestão de informações pessoais do usuario, com tela de login, cadastro, loading e página Home, com design minimalista com intuito apenas de aprendizado e prática.

# Desenvolvimento

Desenvolvido com o intuito de aprender `React`, a princípio apenas para praticar com formulários e os hooks, `useState`, `useRef` e `useEffect`, ao qual acabou se desenvolvendo no Projeto atual.

# hooks

* `useState` 

  - O React useState nos permite rastrear o estado em um componente de função.
  Inicializamos nosso estado chamando useState em nosso componente de função.
```js
    import { useState } from "react";
    
    const [color, setColor] = useState("");
```
* `useRef` 

  - Ele pode ser usado para acessar diretamente um elemento DOM.

```js
    import { useRef  } from "react";
    
    const inputElement = useRef();

    return (
        <input type="text" ref={inputElement} />
    );
```
* `useEffect` 

  - Eles permitem que você use o estado e outros recursos do React sem escrever uma classe.

```js
    useEffect(() => {
        console.log('Hello World');
    }, []);
```
## Dependências Utilizadas

* react-router-dom

* axios

