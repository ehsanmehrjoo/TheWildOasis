// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import styled from "styled-components";

// const StyledAppLayout = styled.div`
//   display: grid;
//   grid-template-columns: 26rem 1fr;
//   grid-template-rows: auto 1fr;
//   grid-template-areas: 
//     "header header"
//     "sidebar main";
//   height: 100vh;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     grid-template-rows: auto 1fr;
//     grid-template-areas: 
//       "header"
//       "main";
//   }
// `;

// const Main = styled.main`
//   background-color: var(--color-grey-50);
//   padding: 4rem 4.8rem 4.6rem;
//   grid-area: main;

//   @media (max-width: 768px) {
//     padding: 2rem;
//   }
// `;

// const SidebarWrapper = styled.div`
//   grid-area: sidebar;

//   @media (max-width: 768px) {
//     display: none;
//   }

//   @media (max-width: 769px) {
//     display: block;
//   }
// `;

// const Container = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
 

//   @media (max-width: 768px) {
//     max-width: 100%;
//     gap: 2rem;
//   }
// `;

// function AppLayout() {
//   return (
//     <StyledAppLayout>
//       <Header />
//       <SidebarWrapper>
//         <Sidebar />
//       </SidebarWrapper>
//       <Main>
//         <Container>
//           <Outlet />
//         </Container>
//       </Main>
//     </StyledAppLayout>
//   );
// }

// export default AppLayout;
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "header"
      "sidebar"
      "main";
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
  grid-area: main;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;

  @media (max-width: 768px) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 2rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;