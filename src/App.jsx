import React from 'react';
import {  Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Login from './pages/Login';
import Account from './pages/Account';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="dashboard" />,
    index : true,
    errorElement:<PageNotFound />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path : "bookings",
    element: <Bookings />,
  },
  {
    path : "cabins",
    element: <Cabins />
  },
  {
    path : "users",
    element: <Users />,
  },
  {
    path : "settings",
    element: <Settings />,
  },
  {
    path : "account",
    element: <Account />,
  },
  {
    path : "login",
    element: <Login />,
  },
  

])
function App() {
return <>
 <GlobalStyle />
<RouterProvider router={router}/>
</>
  
   
}

export default App;
