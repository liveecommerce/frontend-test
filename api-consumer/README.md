# Teste de "api consumer"

Para esse teste você deverá utilizar o seu framework preferido de front-end, consumir uma api e implementar a interface para exibição dos dados, se baseando no mockup que iremos fornecer.


## A API

Você irá consumir a [PokéAPI](https://pokeapi.co/docs/v2), que é gratuita e aberta para uso educacional.

### Dados necessários

Você deverá utilizar um ou mais [endpoints de pokémon] (https://pokeapi.co/docs/v2#pokemon) e exibir algumas informações básicas como:
- Nome
- Número na ordem
- Imagem frontal
- Tipos

Use o seu melhor julgamento para determinar como será o consumo dos endpoints, para o menor tráfego de dados possível para o que queremos utilizar.

Apenas a primeira geração - os primeiros 151 - será suficiente para o que queremos que você nos mostre.

### Mockup

[[https://github.com/liveecommerce/frontend-test/blob/main/api-consumer/mockup.png|alt=mockup]]


## O que consideramos como essencial

Todos os pontos que são citados no `README.md`, que está na raiz desse repositório.


## Adicionais

- Como é uma API pública, de "fair use", utilize cache local sempre que possível para evitar requisições desnecessárias, já que os dados tem pouca frequência de atualização
- Filtro por nome e ordenação (a-z, z-a, número crescente, número decrescente) são recursos interessantes
