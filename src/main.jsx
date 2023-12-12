import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import SimpleForm from './components/SimpleForm/SimpleForm.jsx';
import StatefulForm from './components/StatefulForm/StatefulForm.jsx';
import RefForm from './components/RefForm/RefForm.jsx';
import HookForm from './components/HookForm/HookForm.jsx';
import ReusableForm from './components/ReusableForm/ReusableForm.jsx';
import GrandPa from './components/GrandPa/GrandPa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/simple",
        element: <SimpleForm></SimpleForm>
      },
      {
        path: "/stateful",
        element: <StatefulForm></StatefulForm>
      },
      {
        path: "/ref",
        element: <RefForm></RefForm>
      },
      {
        path: "/hook",
        element: <HookForm></HookForm>
      },
      {
        path: "/reusable",
        element: <ReusableForm></ReusableForm>
      },
      {
        path: "/propDrilling",
        element: <GrandPa></GrandPa>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
