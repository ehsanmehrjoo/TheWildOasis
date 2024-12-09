import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import AppLayuot from './ui/AppLayuot';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient =  new QueryClient({
  defaultOptions: {
    queries:{
      staleTime: 60 * 1000
    }
  }
})

const router = createBrowserRouter([
  {
    element: <AppLayuot />,
    errorElement:<PageNotFound />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="dashboard" />,
        index : true,
        
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
    ]
  },
  {
    path : "login",
    element: <Login />,
  }, 
  {
     errorElement:<PageNotFound />,
  } 

])
function App() {
return  <QueryClientProvider client={queryClient}>
<ReactQueryDevtools initialIsOpen={false} /> 
 <GlobalStyle />
<RouterProvider router={router}/>
</QueryClientProvider>
 
  
   
}

export default App;
