# Teste de "data store"

![Build and test](https://github.com/liveecommerce/frontend-test/workflows/Build%20and%20test/badge.svg)

Para esse teste você deverá fazer o testes unitários passarem sem alterá-los.\
A build está intencionalmente falhando e você deverá fazer a badge acima ficar verde, exibindo status de "successo".


## Requisitos

- Editor - `vscode` irá te ajudar, nesse projeto
- Node v12.13.0+
- Yarn v1+


## Objetivo

O objetivo desse teste é fazer a extração de dados do `DataStore` ser funcional e objetivo, com o código mais elegante possível.

```
const dataStore = new DataStore([
    new DataCollection([4, 5, 6]),
    new DataCollection([10, 11]),
    new DataCollection([21, 22, 23, 24]),
    new DataCollection([32]),
]);

dataStore.getItems(3, 1); // output: [10]
dataStore.getItems(3, 3); // output: [10, 11, 21]
dataStore.getItems(0, 6); // output: [4, 5, 6, 10, 11, 21]
dataStore.getItems(4, 3); // output: [11, 21, 22]
```

Preste bastante atenção à formação do código, que está sendo validada pelo `eslint`.

Para verificar e fixar a formatação, se você não está utilizando o `vscode`, utilize:

```
data-store$ yarn lint
data-store$ yarn lint:fix
```


## Setup

Para instalar as dependências deste projeto, execute:

```
data-store$ yarn
```


## Teste

Para executar os testes, utilize um dos seguintes comandos:

```
data-store$ yarn test
data-store$ yarn test:watch
```


## Domínios

### DataCollection

É uma coleção de dados - para esse caso, usaremos apenas `number` para facilitar.

```
const collection = new DataCollection([1, 2, 3, 4]);
```

### DataStore

É uma lista de coleções de dados.\
Representa um possível serviço de persistência de `DataCollection`.

```
const store = new DataStore([
    new DataCollection([1, 2]),
    new DataCollection([15, 16, 18, 19]),
    new DataCollection([21, 23, 24]),
    new DataCollection([30]),
]);
```
