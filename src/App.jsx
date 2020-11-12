import { Route } from 'react-router';
import { Home } from './components/Home';

import './App.scss';
function App() {
  return (
    <Route path="/">
      <Home/>
    </Route>
  );
}

export default App;
