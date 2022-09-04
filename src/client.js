import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
// import { hydrate } from 'react-dom';
import { hydrateRoot } from 'react-dom/client';
const container = document.getElementById('root');
import { store } from './app/store.js'
import { Provider } from 'react-redux'

hydrateRoot(
  container, 
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// hydrate(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

if (module.hot) {
  module.hot.accept();
}