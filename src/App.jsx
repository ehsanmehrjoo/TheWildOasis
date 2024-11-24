
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Dashboard from "./pages/Dashboard"
// import Bookings from "./pages/Bookings"
// import Cabins from "./pages/Cabins"
// import Settings from "./pages/Settings"
// import NewUsers from "./pages/Users"
// import Login from "./pages/Login"
// import Account from "./pages/Account"
// import CheckinBooking from "./features/check-in-out/CheckinBooking"
import styled, { createGlobalStyle } from "styled-components"
import GlobalStyle from "./styles/GlobalStyle";

 
//  const router = createBrowserRouter([{
//   element : <Dashboard/> ,
//   children : [
//     {
//       path : "/dashboard",
//       element : <Dashboard/>
//     }, 
//     {
//       path : "/bookings",
//       element : <Bookings/>
//     },
//     {
//       path : "/cabins",
//       element : <Cabins/>
//     },
//     {
//       path : "/checkin/:bookingID",
//       element : <CheckinBooking/>
//     }, 
//     {
//       path : "/settings",
//       element : <Settings/>
//     },
//     {
//       path: "/users",
//       element : <NewUsers/>
//     },
//     {
//       path : "/login",
//       element : <Login/>
//     },
//     {
//       path : "/account",
//       element : <Account/>
//     }

//   ]
//   }
//  ])





const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-500 );
  color: var(--color-brand-50 );
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-color: #f8f9fa;
//   gap: 20px;
// `;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <AppContainer> */}
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Click in")}>Click in</Button>
        <Button onClick={() => alert("Click out")}>Click out</Button>
        <Input type="number" placeholder="Number of guests" />
      {/* </AppContainer> */}
    </>
  );
}

export default App;