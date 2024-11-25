
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
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

 
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
        <Heading>The Wild Oasis</Heading>
        <Button onClick={() => alert("Click in")}>Click in</Button>
        <Button onClick={() => alert("Click out")}>Click out</Button>
        <Input type="number" placeholder="Number of guests" />
      {/* </AppContainer> */}
    </>
  );
}

export default App;