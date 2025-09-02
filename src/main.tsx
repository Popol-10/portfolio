// import React from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.js'
// import { Provider } from 'react-redux'
// import { storeRedux } from './redux/store.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Provider store={storeRedux}>
//       <BrowserRouter>
//           <App />
//       </BrowserRouter>
//     </Provider>
//   </StrictMode>,
// )

// //npm i @reduxjs/toolkit react-redux
// //npm i --save-dev @types/react-redux


import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { storeRedux } from './redux/store';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={storeRedux}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
