import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/normalize.css';
import './Styles/index.css';
import Home from './Pages/Home';
import User from './Pages/User';
import ErrorComponent from './Components/Error/Error';  // Importez votre composant d'erreur
import MockedDataPage from './Service/MockedDataPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/user/:id",
    element: <User />,
  },
  {
    path: "/",
    element: <Home />,
  },
   
    {
      path: "/mocked-data" ,
    element: <MockedDataPage/>,
    },
  {
    path: "*",  // Route générique pour les erreurs
    element: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
