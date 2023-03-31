import { createBrowserRouter } from 'react-router-dom';
import Catalog from '../Pages/Catalog';
import { Profile } from '../Pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog />
  },
  {
    path: '/:id',
    element: <Profile />
  }
]);
