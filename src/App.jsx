// App.jsx
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import BookCall from './Components/Contact/ContactDrawer/BookCall';
import ProjectShowcase from './Components/Projects/ProjectShowCase/ProjectShowCase';

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
  {
    path: '/projects/:slug',
    element: <Layout />,
    children: [
      {index: true, element: <ProjectShowcase />},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
