# CRUD app com populate (v6)

Demetrius

## Introdução

Nós aprendemos a como criar um servidor usando `ExpressJS` e como fazer as opeações de CRUD em um banco de dados no `MongoDB` com Mongoose. Essa atividade vai te ajudar a entender o quanto você fixou esses conceitos e como aplicá-los.
**Esse desafio requer que você crie uma aplicação básica contendo dois `models` e rotas com `Express`**.

Você irá trabalhar nos seguintes arquivos:

- `models/album.model.js`
- `models/purchase.model.js`
- `routes/albums.router.js`
- `routes/purchase.router.js`

## Vamos começar!

O arquivo `app.js` contém as configurações iniciais do servidor e da conexão do banco de dados com `mongoose`.

Para iniciar, siga as instruções:

- Fork no repositório
- Clone o repositório

Em seguida:

- Instale as dependências:
  `npm install `

- Crie um arquivo `.env` seguindo o exemplo do arquivo `.example.env`:

```
PORT=8080 <-- padrão
MONGODB_URI=mongodb://127.0.0.1:27017/LAB-CRUD-express-mongoose
```

- Para iniciar o servidor, utilize `npm run dev` para rodar com nodemon, ou tente a nova feature do node `node --watch index.js`

- Caso queira testar suas rotas, utilize o [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/)

  **Importante!**: Lembre-se de **exportar** cada `model` após criá-lo.

## Iteração 1: Crie os models `Album` e `Purchase`

O modelo do **`Album`** deve conter as seguintes propriedades:

- `performer` - String
- `title` - String
- `cost` - Number

O modelo **`Purchase`** deve conter as seguintes propriedades:

- `shippingAdress` - String
- `album` - _ObjectID_ referente ao modelo do Album

## Iteração 2 Crie as rotas **`/albums`**

**Importante:** Antes de começar, leia atentamente as instruções.

**Requests**
Você sempre pode adicionar um `console.log(req.body)` ou `console.log(req.params` para checar o conteúdo do corpo da requisição ou dos parâmetros de rota. Lembre-se de checar o terminal.

**Response**
Todas as suas rotas devem retornar uma **response em JSON**. Isso significa que você deve utilizar `res.json()`.

Por exemplo:

```
const data = await Model.find()
return res.status(200).json(data)
```

### 2.1 Crie a rota `POST /albums`

Essa rota irá receber `requests` contendo um objeto com as informações do album: `performer`, `title`, `cost`.
Você pode acessar esses valores pelo `req.body`.
A rota deve:

- Criar um novo album com os valores recebidos no `req.body`, utilizando o model `Album`.
- Deve retornar uma response em `JSON` contendo o documento criado.

### 2.2 Crie a rota `GET /albums`

A rota `GET /albums` deve:

- Retornar todos os albums do banco de dados.
- Retornar uma response em `JSON` contendo todos os documentos de albums.

### 2.3 Crie a rota `GET /albums/:albumId`

A rota recebe a **id** do _album_ pelo parâmetro de rota `albumId`.
Você pode acessar esse valor com `req.params`.

A rota deve:

- Retornar um único documento pelo seu _id_, utilizando o model `Album`.
- Deve retornar uma response em `JSON` incluindo o objeto do album.

### 2.4 Crie a rota `PUT /albums/:albumId`

A rota recebe o _id_ do album a ser atualizado como o parâmetro de rota `albumId`.
O `req.body` irá conter as seguintes informações do album: `performer`, `title` e `cost`.

A rota deve:

- Encontrar um album existente pelo seu _id_ e atualizar os campos `performer`, `title` e `cost`.
- Retornar uma response em `JSON` incluindo o documento atualizado do album.

### 2.5 Crie a rota `DELETE /albums/:albumId`

Essa rota recebe o _id_ do album a ser deletado como o parâmetro de rota `albumId`.

A rota deve:

- Deletar um album existente pelo seu _id_, utilizando o model `Album`.
- Retornar uma response em `JSON` incluindo **_apenas_** o status HTTP de `204`.

## Iteração 3: Crie as rotas `/purchases`

### 3.1 Crie a rota `POST /purchases`

Essa rota irá receber requests contendo o objeto com as informações da _purchase_:

- `shippingAddress` - String
- `albumId` - ObjectId.

Você pode acessar esses valores através do `req.body`.

A rota deve:

- Criar um novo documento _purchase_ com os valores recebidos em `req.body`, utilizando o model `Purchase`.
- A propriedade `albumId` deve guardar apenas a referencia do `_id` do objeto do album.
- Retornar uma response em `JSON` com o conteúdo da _purchase_ criada.

### 3.2 Crie a rota `GET /purchases/:purchaseId`

Essa rota recebe o id da _purchase_ como parâmetro de rota `purchaseId`.

A rota deve:

- Retornar **uma** _purchase_ encontrada pelo id, utilizando o model `Purchase`.
- Popular a propriedade `album` para receber os detalhes do album.
- Retornar uma response em `JSON` incluindo o objeto populado da _purchase_.

**Dica:** A Propriedade `album` do objeto é apenas uma referência (_id_). Você deverá `.populate()` esse campo para conseguir os detalhes do album dentro da _purchase_.

**Bons códigos!**

_Ironhack Sao Paulo._
