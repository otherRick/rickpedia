import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from './Catalog';
import { Single } from './Single';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog />
  },
  {
    path: '/:id',
    element: <Single />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

reportWebVitals();
