/*# Exercício 1

Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
```jsx
nome: string;
preco: number;
disponibilidade: boolean;
```
b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**/

const sacolao = []
    obj1 ={
        nome: "Pêra",
        preco: 4.50,
        disponibilidade: true
    },
    obj2 = {
        nome: "Melancia",
        preco: 8,
        disponibilidade: true
    },
    obj3 = {
        nome: "Banana",
        preco: 3.20,
        disponibilidade: false
    }
const seuNome = prompt("Qual seu nome?")
confirm(`Olá, ${seuNome}. Sua sacola está vazia ${sacolao}. Deseja inserir itens à ela?`)
sacolao.push(obj1, obj2, obj3)
// sacolao.push(obj2)
// sacolao.push(obj3)
console.table(sacolao)

