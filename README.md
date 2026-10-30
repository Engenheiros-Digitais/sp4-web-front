# Sprint 4 - Front-End Design + Web Development (React)

## Sobre o projeto

Evolução do projeto JOVI Vision AI desenvolvido na Sprint 3. A Landing Page (HTML/CSS) foi integrada ao React, estilizada com Tailwind CSS e responsiva para Desktop, Tablet e Mobile.

Nesta Sprint foram adicionados:

- Rotas públicas (Início, Funcionalidades e Login) e rotas privadas (Painel e Feedbacks), com React Router.
- Hooks customizados para separar a lógica da parte visual.
- Consumo de uma API mockada (MockAPI) para carregar os integrantes da equipe e enviar/listar feedbacks.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- MockAPI
- Vercel

## Como instalar as dependências

É necessário ter o Node.js instalado (versão 20.19 ou superior).

Clone o repositório:

```bash
   git clone https://github.com/Engenheiros-Digitais/sp4-web-front.git
```

Entre na pasta do projeto:

```bash
cd sp4-web-front.git
```

Instale as dependências:

```bash
npm install
```

## Como executar o projeto

Após instalar as dependências, rode:

```bash
npm run dev
```

E abra no navegador o endereço mostrado no terminal (normalmente http://localhost:5173).

## Back-end

O projeto não possui back-end próprio, então não é necessário executar nenhum servidor. Os dados são consumidos da MockAPI, que já está online. A URL da API fica no arquivo `src/services/api.js`.

Recursos usados na API:

- `GET /membros` — integrantes exibidos na seção "Quem somos?"
- `GET /feedbacks` — lista de feedbacks
- `POST /feedbacks` — envio de um novo feedback

## Usuários e senhas para teste

As páginas Painel e Feedbacks são rotas privadas. Para acessar, faça login com:

Usuário: Qualquer nome (ex: admin ou aluno)

Senha: Qualquer senha com no mínimo 4 caracteres (ex: 1234)

## Estrutura de pastas

- `src/components` — componentes da página (Header, Footer, FeatureCard, Galeria, Equipe...)
- `src/pages` — páginas de cada rota (Home, Funcionalidade, Login, Painel, Feedbacks)
- `src/hooks` — hooks customizados (`useAuth`, `useFetch`, `useSlideshow`, `useFlash`)
- `src/context` — contexto de autenticação
- `src/services` — URL da API

## Uso de Inteligência Artificial no projeto

Neste projeto, a IA (Gemini, Claude) foi utilizada pontualmente como um copiloto de desenvolvimento e suporte técnico. A ferramenta foi consultada como uma documentação interativa para:

- Esclarecer dúvidas sobre a configuração do Tailwind CSS e do React Router.
- Consultar boas práticas na criação de hooks customizados e rotas privadas.
- Auxiliar na identificação e solução de erros durante a execução e o deploy na Vercel.

Todo o código, lógica de negócio e decisões de desenvolvimento foram executados e compreendidos pelos integrantes, utilizando a IA estritamente como ferramenta de apoio e consulta rápida.

## Links do projeto

Link do repositório: [github.com/Engenheiros-Digitais/sp4-web-front](https://github.com/Engenheiros-Digitais/sp4-web-front)

Link do deploy na Vercel: [sp4-web-front1.vercel.app](https://sp4-web-front1.vercel.app)
