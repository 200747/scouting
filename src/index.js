import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Q2 from './components/Pages/Q2'
import Q3 from './components/Pages/Q3'
import Scoreoverzicht from './components/Pages/Scoreoverzicht';
import Totaal from './components/Pages/Totaal'
import Totaalmod from './components/Pages/Totaalmod';
import Totaaltaak from './components/Pages/Totaaltaak'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Q2",
    element: <Q2/>,
  },
  {
    path: "Q3",
    element: <Q3/>,
  },
  {
    path: "Scoreoverzicht",
    element: <Scoreoverzicht/>,
  },
  {
    path: "Totaal",
    element: <Totaal/>,
  },
  {
  path: "Totaalmod",
  element: <Totaalmod/>,
},
{
  path: "Totaaltaak",
  element: <Totaaltaak/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
