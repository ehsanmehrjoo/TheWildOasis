import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "header header"
    "sidebar main";
  height: 100vh;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
      "header"
      "main";
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 4.6rem;
  grid-area: main;
  overflow-y: auto; /* Enables scrolling on smaller screens */
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;

  @media (min-width: 768px) {
    display: none; /* Hide sidebar on mobile */
  }

  @media (min-width: 769px) {
    display: block; /* Show sidebar on desktop */
  }
`;

const Container = styled.div`
max-width: 120rem;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 3.2rem;
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
