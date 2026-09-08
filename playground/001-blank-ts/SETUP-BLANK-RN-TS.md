# React Native + Expo com pnpm — Comandos básicos

## 1. Instalar o pnpm

Uma forma simples:

```shell
npm install -g pnpm

pnpm --version

pnpm create expo-app@latest 001-blank-ts --template blank-typescript
(ou pnpm create expo-app@latest 001-default-ts --template default)

cd 001-blank-ts

pnpm install

pnpm expo install react-dom react-native-web @expo/metro-runtime

pnpm expo start

|pnpm expo start --web

pnpm expo start --android
```

# Estrutura do projeto

Projeto criado com:

```bash
pnpm create expo-app@latest 001-blank-ts --template blank-typescript
```

Estrutura principal:

```text
001-blank-ts/
├── .claude/
├── .expo/
├── assets/
├── node_modules/
├── .gitignore
├── AGENTS.md
├── app.json
├── App.tsx
├── CLAUDE.md
├── index.ts
├── LICENSE
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

## Arquivos e pastas

| Item             | Função                                                                    |
| ---------------- | ------------------------------------------------------------------------- |
| `App.tsx`        | Componente principal da aplicação. É onde a interface inicial é definida. |
| `index.ts`       | Ponto de entrada do projeto. Registra o componente `App` no Expo.         |
| `assets/`        | Armazena imagens, ícones, fontes e outros arquivos estáticos.             |
| `app.json`       | Configurações do aplicativo Expo, como nome, ícone, versão e plataformas. |
| `package.json`   | Define scripts, dependências e informações do projeto.                    |
| `pnpm-lock.yaml` | Registra as versões exatas das dependências instaladas pelo pnpm.         |
| `node_modules/`  | Contém as dependências instaladas. Não deve ser versionada no Git.        |
| `tsconfig.json`  | Configura o TypeScript no projeto.                                        |
| `.gitignore`     | Define arquivos e pastas que o Git deve ignorar.                          |
| `.expo/`         | Arquivos locais gerados pelo Expo durante o desenvolvimento.              |
| `LICENSE`        | Define a licença de uso e distribuição do projeto.                        |

## Fluxo básico

```text
index.ts → App.tsx →  Componentes da aplicação
```

Arquivo `package.json`: controla dependências e comandos

Arquivo `app.json`: configura o aplicativo

Arquivo `tsconfig.json`: configura o TypeScript.
