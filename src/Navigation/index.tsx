import { createBrowserRouter } from 'react-router-dom';
import Catalog from '../Pages/Catalog';
import { Profile } from '../Pages/Profile';
import { Home } from '../Pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Catalog',
    element: <Catalog />
  },
  {
    path: '/:id',
    element: <Profile />
  }
]);
