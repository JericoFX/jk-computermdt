/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router, HashRouter } from '@solidjs/router';
import './index.css';
import App from './App';
import NewReport from './Apps/UserSearch/NewReport';
import { ContextProvider } from './Apps/context';

const root = document.getElementById('root');

render(
  () => (
    <ContextProvider>

    <HashRouter root={App}>
      <Route path='/NewReport' component={NewReport} />
    </HashRouter>
    </ContextProvider>
  ),
  root!
);
