import React from 'react';
import Route from './router/router'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
    <Route />
    </Provider>
  );
}

export default App;
