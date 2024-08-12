/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router, HashRouter } from '@solidjs/router';
import './index.css';
import App from './App';
import NewReport from './Apps/UserSearch/NewReport';

const root = document.getElementById('root');

render(
  () => (
    <HashRouter root={App}>
      <Route path='/NewReport' component={NewReport} />
    </HashRouter>
  ),
  root!
);
