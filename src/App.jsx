// App.jsx
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import BookCall from './Components/Contact/BookCall';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: '/bookcall',
    element: <Layout />,
    children: [
      {index: true, element: <BookCall />},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
