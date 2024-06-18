

---

# GitHub Favorites

Este projeto é uma aplicação web que permite adicionar, visualizar e remover usuários do GitHub de uma lista de favoritos. Ele utiliza a API do GitHub para buscar informações sobre os usuários e armazena os dados no `localStorage` do navegador.
Foi desenvolvido como estudo no curso de Full stack da rocketseat.
## Funcionalidades

- Adicionar usuários do GitHub à lista de favoritos.
- Visualizar informações sobre os usuários favoritos, incluindo nome, login, repositórios públicos e seguidores.
- Remover usuários da lista de favoritos.
- Armazenar a lista de favoritos no `localStorage` para persistência de dados.

## Estrutura do Projeto

O projeto é dividido em duas classes principais:

1. **Favorites**: Contém a lógica dos dados e como eles são estruturados.
2. **FavoritesView**: Gerencia a visualização e eventos do HTML.

### Arquivos Principais

- **favorites.js**: Contém as classes `Favorites` e `FavoritesView`.
- **GithubUser.js**: Contém a lógica para buscar informações dos usuários na API do GitHub.
- **index.html**: Arquivo HTML principal da aplicação.
- **main.js**: Arquivo JavaScript que inicializa a aplicação.

### Classes

#### Favorites

- `constructor(root)`: Inicializa a classe e carrega os dados do `localStorage`.
- `load()`: Carrega os dados do `localStorage`.
- `save()`: Salva os dados no `localStorage`.
- `add(username)`: Adiciona um usuário à lista de favoritos.
- `delete(user)`: Remove um usuário da lista de favoritos.

#### FavoritesView

- `constructor(root)`: Inicializa a classe e configura os eventos.
- `onadd()`: Configura o evento de adicionar um usuário.
- `update()`: Atualiza a visualização da tabela de favoritos.
- `createRow()`: Cria uma nova linha na tabela de favoritos.
- `removeAllTr()`: Remove todas as linhas da tabela de favoritos.

## Como Usar

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/github-favorites.git
```

2. Navegue até o diretório do projeto:

```sh
cd github-favorites
```

3. Abra o arquivo `index.html` no seu navegador.

4. Adicione o nome de usuário do GitHub no campo de busca e clique no botão "Adicionar".

## Exemplo de Uso

<img width="1461" alt="Captura de Tela 2024-06-18 às 15 14 10" src="https://github.com/AlannaaSilva/Github-Favorites/assets/104801163/0f941d57-1c4c-4a2b-b9b7-a835da58a0e5">


## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- API do GitHub

## Estrutura do Código

```plaintext
github-favorites/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── GithubUser.js
│   ├── favorites.js
│   └── main.js
└── README.md
```


