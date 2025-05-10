# SOSAntiques 📱

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-0.79.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-blue)
![Jest](https://img.shields.io/badge/Jest-29.7.0-green)
![Firebase](https://img.shields.io/badge/Firebase-11.6.0-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC)

</div>

## 📋 Sobre o Projeto

SOSAntiques é um aplicativo móvel desenvolvido em React Native que visa facilitar a conexão entre colecionadores e entusiastas de antiguidades. O aplicativo oferece uma plataforma moderna e intuitiva para a compra, venda e troca de itens antigos.

## ✨ Funcionalidades Principais

- 🔍 Busca avançada de itens antigos
- 💬 Sistema de mensagens integrado
- 🌐 Suporte a múltiplos idiomas
- 📸 Upload e gerenciamento de imagens
- 🔐 Autenticação segura
- 💰 Sistema de pagamentos integrado
- 📱 Interface responsiva e moderna
- 🔔 Notificações em tempo real

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - React Native 0.79.2
  - TypeScript 5.0.4
  - Gluestack UI
  - Tailwind CSS
  - React Navigation 7.1.6

- **Backend:**
  - Firebase 11.6.0
  - Cloud Functions
  - Firestore
  - Firebase Storage

- **Ferramentas de Desenvolvimento:**
  - Jest para testes
  - ESLint e Prettier para código limpo
  - i18next para internacionalização
  - React Native Reanimated para animações

## 🚀 Começando

### Pré-requisitos

- Node.js >= 18
- Yarn ou npm
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS)
- CocoaPods (para iOS)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/SOSAntiques.git
cd SOSAntiques
```

2. Instale as dependências:
```bash
yarn install
# ou
npm install
```

3. Para iOS, instale as dependências do CocoaPods:
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

4. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações.

### Executando o Projeto

1. Inicie o Metro bundler:
```bash
yarn start
# ou
npm start
```

2. Execute no Android:
```bash
yarn android
# ou
npm run android
```

3. Execute no iOS:
```bash
yarn ios
# ou
npm run ios
```

## 🧪 Testes

O projeto utiliza Jest para testes automatizados. Para executar os testes:

```bash
# Executar todos os testes
yarn test

# Executar testes em modo watch
yarn test:watch

# Gerar relatório de cobertura
yarn test:coverage

# Executar testes em CI
yarn test:ci
```

## 📁 Estrutura do Projeto

```

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Padrões de Código

- Seguimos as [Melhores Práticas do React Native](https://reactnative.dev/docs/best-practices)
- Utilizamos TypeScript para type safety
- Seguimos o padrão de commits [Conventional Commits](https://www.conventionalcommits.org/)
- Mantemos a cobertura de testes acima de 80%

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

## 📱 Screenshots

[Adicionar screenshots do aplicativo aqui]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- [Carlos Dev] - [Desenvolvedor de Softwares] - [GitHub](https://github.com/CIGR2021)

## 🙏 Agradecimentos

- [React Native](https://reactnative.dev)
- [Firebase](https://firebase.google.com)
- [Gluestack UI](https://gluestack.io)
- [Tailwind CSS](https://tailwindcss.com)

## 📞 Suporte

Para suporte, envie um email para [seu-email@dominio.com] ou abra uma issue no GitHub.

---

<div align="center">
  <sub>Construído com ❤️ pela equipe SOSAntiques</sub>
</div>