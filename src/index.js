import {h, render} from 'preact';
import connect from '@vkontakte/vk-connect';
import App from './App';
import store from './store';
import { Provider } from 'mobx-preact';
import DevTools from 'mobx-preact-devtools';

if (__DEV__) {
  /*require('preact/devtools');

  const devToolsRoot = document.createElement('div');
  devToolsRoot.id = 'devtools';
  document.body.appendChild(devToolsRoot);
  render(<DevTools />, devToolsRoot);*/
}

let root = null;

connect.send("VKWebAppInit", {});
connect.subscribe((e) => console.log(e));

function bootstrap (App) {
  root = render((
    <Provider {...store}>
      <App />
    </Provider>
  ), document.getElementById('root'), root);
}

bootstrap(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    bootstrap(require('./App').default);
  });
}
