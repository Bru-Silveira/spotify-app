# Spotify App 🎧

Este é um projeto desenvolvido para buscar e exibir playlists do Spotify usando a API pública do Spotify. O aplicativo permite ao usuário pesquisar por playlists com base em um termo de pesquisa e exibe os resultados em cards.

## Funcionalidades ⚙️

- Busca de Playlists: O usuário pode buscar por playlists do Spotify através de um campo de pesquisa.
- Exibição das Playlists: As playlists são exibidas em cards com a imagem de capa e o nome da playlist.
- Integração com a API do Spotify: O aplicativo se conecta à API do Spotify para realizar a busca e mostrar as playlists de maneira dinâmica.

## Tecnologias utilizadas 🛠️

- React: Framework JavaScript utilizado para construir a interface.
- React Bootstrap: Biblioteca de componentes de UI para o desenvolvimento responsivo.
- Spotify API: API pública do Spotify usada para buscar playlists.
- CSS: Estilos personalizados para a interface.

## 📂 Estrutura do Projeto

```
/client
├── public/                
│   ├── index.html
│   ├── logoSpotify.png
│   └── ...
├── src/              
│   ├── App.js
│   ├── index.js
│   ├── Login.css
│   ├── Login.js
|   |__ Playlists.css
|   |__ Playlists.js
|   |
│   └── ...
|__ package.json
|__ README.md

```
## Como rodar o projeto localmente 🚀

### Pré requisitos

- Node.js e npm instalados no seu computador. Caso não tenha você pode baixá-los aqui [https://nodejs.org/pt]

### Passos

1. Clone o repositório: No terminal, clone o repositório com o seguinte comando:

```sh
git clone https://github.com/Bru-Silveira/spotify-app.git

```
2. Instale as dependências: Navegue até o diretório do projeto e instale as dependências com o comando:

```sh
cd spotify-app
npm install

```
3. Configure a API do Spotify: Para que a integração com a API do Spotify funcione, é necessário ter um Client ID e Client Secret do Spotify. Crie uma conta de desenvolvedor no Spotify Developer Dashboard [https://developer.spotify.com/dashboard] e gere as credenciais para o seu aplicativo. Após obter as credenciais, adicione-as no código (dentro do arquivo que manipula a requisição de autenticação).

4. Inicie o servidor de desenvolvimento: Agora, inicie o servidor de desenvolvimento com o comando:

```sh
npm start
```
O aplicativo será executado em [http://localhost:3000].

## Licença 📜

Este projeto está licenciado sob a MIT License. Sinta-se livre para utilizá-lo e modificá-lo! 🎉


