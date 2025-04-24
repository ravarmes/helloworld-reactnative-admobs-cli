<h1 align="center">
    <img alt="React Native AdMob" src="https://github.com/ravarmes/helloworld-reactnative-admobs-cli/tree/main/assets/logo.png" />
</h1>

<h3 align="center">
  Hello World: Template para React Native com AdMob
</h3>

<p align="center">Template simples para integração de anúncios AdMob em aplicativos React Native utilizando React Native CLI</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ravarmes/helloworld-reactnative-admobs-cli?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ravarmes/helloworld-reactnative-admobs-cli/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ravarmes/helloworld-reactnative-admobs-cli?style=social">
  </a>
</p>

<p align="center">
  <a href="#-abordagem">Abordagem</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalacao">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-configuracao">Configuração do AdMob</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licenca">Licença</a>
</p>

## :rocket: Abordagem <a name="-abordagem"/></a>

Este projeto utiliza o **React Native CLI** em vez do Expo (EAS - Expo Application Services). O React Native CLI é a abordagem oficial de desenvolvimento que oferece:

- Acesso direto ao código nativo (iOS/Android)
- Maior flexibilidade para modificações específicas de plataforma
- Controle total sobre o processo de build e configurações nativas
- Integração direta com bibliotecas nativas sem a necessidade de ejetar

Ao contrário do Expo, que oferece uma experiência simplificada mas com limitações, o React Native CLI permite o acesso completo às capacidades nativas das plataformas Android e iOS desde o início do projeto.

## :computer: Instalação e execução <a name="-instalacao"/></a>

1. Faça um clone desse repositório;
2. Entre na pasta do projeto: `cd helloworld-reactnative-admobs-cli`;
3. Instale as dependências: `npm install`;
4. Certifique-se de que o emulador Android esteja em execução;
5. Execute o aplicativo: `npx react-native run-android`;

> **Nota**: Após builds, a pasta `android/app/.cxx` pode crescer significativamente (150MB+). Esta pasta contém arquivos de compilação nativa que podem ser removidos com `rm -rf android/app/.cxx` para liberar espaço. Eles serão recriados automaticamente no próximo build.

## :bulb: Funcionalidades <a name="-funcionalidades"/></a>

Este template demonstra a integração básica do Google AdMob com React Native, incluindo:

- Configuração inicial do AdMob
- Exibição de banners de anúncios
- Implementação de anúncios intersticiais
- Exemplo de anúncios recompensados

## :wrench: Configuração do AdMob <a name="-configuracao"/></a>

Este template utiliza **IDs de teste do AdMob** para que você possa verificar o funcionamento sem configuração adicional. Para produção, você deve:

1. Crie uma conta no [Google AdMob](https://admob.google.com/);
2. Registre seu aplicativo e obtenha os IDs de aplicativo e unidades de anúncio;
3. Substitua os IDs no arquivo `app.json`:

```json
{
  "react-native-google-mobile-ads": {
    "android_app_id": "seu-app-id-android",
    "ios_app_id": "seu-app-id-ios"
  }
}
```

4. Atualize os IDs de unidades de anúncio no código do aplicativo.

> **Importante**: Os IDs de teste incluídos neste template (`ca-app-pub-3940256099942544~`) são fornecidos pelo Google para testes e não geram receita real. Eles devem ser substituídos por seus próprios IDs antes da publicação na loja.

## :memo: Licença <a name="-licenca"/></a>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
