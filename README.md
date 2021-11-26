# Getting Started with Create React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

No diretório do projeto, você pode executar:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador..

A página será recarregada se você fizer edições.
Você também verá quaisquer erros de lint no console.

### `yarn test`

Inicia o executor de teste no modo de observação interativo.
Consulte a seção sobre execução de testes para obter mais informações. [running tests](https://facebook.github.io/create-react-app/docs/running-tests).


## Descrição sobre o trabalho realizado

## 🚀 Techs

Tecnologias Utilizadas

- React.Js
- TypeScript
- styled-components
- react-router-dom

## 💻 Sobre a aplicação


Aplicação responsavel por listar todos os produtos e realizar o cadastro de novos.
Todos os produtos estão sendo salvos no `localStorage` com a opção de cadastrar novos, Editar ou remover.

## 💻 Ferramentas utilizadas

Foram utilizadas ferramentas como:

- UUID: Gerar um id unico para cada produto;
- Polished: Trablhar com cores dentro do Styled-components
- Yup: Validação dos formularios para criar e editar os produtos
- Unform: Utilizada na manipulação dos formularios do aplicação


## Decisões

- Foram criados alguns componentes para melhor trabalhar dentro da aplicação, como tambem pensando em uma escalabilidade futura da aplicação:

  - Input : Personalização toda do ZERO, como tratativas aos erros, valores default, possiveis icones para serem adicionados,bordas personalizadas para quando o input tiver selecionado.

  -Tooltip: Personalização das mensagens de erros ao tentar cadastrar ou editar um produto.


- As cores e alguns elementos visuais da aplicação foram baseadas na logo enviada pelo email.

- Foi criado um Hook `useProducts` utilizando o Context API, considerando que seja necessario para repassar os produtos cadastradas entre as paginas da aplicação.Tendo como funcionalidade dentro do Hook as funções de Criar, Editar e Remover os produtos, considerando fazer mais sentindo tais funções dentro do context.

- Foi criado uma pagina para cadastro do produto de forma isolado e criado uma modal para editar o produto, tendo em mente uma maior acessibilidade e usabilidade para o cliente.

- Foi criado um unico teste unitario, devido ao tempo, porem a intenção era fazer pelo menos um para cada component e pagina da aplicação.

