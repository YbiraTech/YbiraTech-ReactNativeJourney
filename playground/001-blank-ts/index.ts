// Ponto de entrada do projeto. Registra o componente `App` no Expo.

import { registerRootComponent } from "expo";

import App from "./App";

// O registerRootComponent chama
// AppRegistry.registerComponent('main', () => App);
// Ele também garante que, seja ao carregar o aplicativo no Expo Go ou
// em uma build nativa, o ambiente seja configurado adequadamente.
registerRootComponent(App);
