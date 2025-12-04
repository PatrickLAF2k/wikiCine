# Projeto para avaliação técnica

Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar domínio de React, TypeScript, boas práticas de código, organização de componentes, consumo de API e experiência do usuário (UX).

O objetivo é criar um aplicativo que consuma a API pública do TVMaze e permita explorar séries, temporadas, episódios e favoritos.

## 🎯 Objetivo

Desenvolver um aplicativo React funcional, organizado e escalável que:

- Consome dados da API do TVMaze
- Lista séries e episódios
- Exibe detalhes completos de cada item
- Permite favoritar séries com persistência
- Mantém boa performance, responsividade e UX

O foco principal é avaliar:

- Capacidade técnica com React + TypeScript
- Arquitetura e componentização
- Boas práticas de estado, navegação e semântica
- Organização, clareza e eficiência do código

## 📌 Funcionalidades Obrigatórias Implementadas

### 1. Página de Listagem de Séries

- Listagem de séries obtidas da API do TVMaze
- Paginação (ou carregamento via busca conforme necessidade da API)
- Campo de busca pelo nome da série
- Cada card exibe:
  - 📌 Nome da série
  - 🖼️ Poster
  - ⭐ Nota

### 2. Página de Detalhes da Série

Ao clicar em uma série, o usuário visualiza:

- Nome
- Poster
- Dias e horários de exibição
- Gêneros
- Resumo completo
- Episódios agrupados por temporada
- Navegação para página individual do episódio

### 3. Listagem e Detalhes dos Episódios

Para cada episódio, a aplicação exibe:

- Nome
- Número do episódio
- Temporada
- Resumo
- Imagem (caso disponível)

O usuário navega entre episódios por meio de rotas dedicadas:
`/series/:id/season/:s/episode/:e`

### 4. Favoritos (com Zustand + Persistência)

A aplicação permite:

- ❤️ Adicionar e remover séries dos favoritos
- 📚 Listagem dos favoritos em ordem alfabética
- 🔄 Favoritos persistem após refresh ou fechamento do navegador
- 🔗 Navegar dos favoritos diretamente para os detalhes da série

## 🧱 Stack Utilizada

**Frontend**
- ⚛️ React.js
- 🟦 TypeScript
- 🎨 TailwindCSS
- 🧭 React Router DOM
- 🖼️ Iconify
- ⚡ Vite

**Gerenciamento de Estado**
- 🐻 Zustand com persistência (persist middleware)

**API**
- 🌐 TVMaze API
  - `/shows`
  - `/shows/:id/episodes`

## 🧩 Requisitos Técnicos Atendidos

✔️ Componentização clara e reutilizável
✔️ Organização de pastas coerente
✔️ Uso de hooks e paradigma funcional
✔️ Tipagem completa com TypeScript
✔️ Navegação estruturada com rotas dinâmicas
✔️ Layout totalmente responsivo
✔️ Tratamento adequado de dados ausentes (ex: imagens faltando)
✔️ Semântica HTML aplicada (article, section, etc.)
✔️ Persistência de favoritos com Zustand
✔️ UX fluida e acessível
✔️ Código limpo, legível e comentado
