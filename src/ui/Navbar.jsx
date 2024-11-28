import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
 
 overflow: auto;
`
const StyledLink  = styled(Link)`
padding: 2rem;
`
function Navbar() {
  return (
    <Nav>
        <ul>
          <StyledLink to="dashboard">Home</StyledLink>
          <StyledLink to="bookings">Bookings</StyledLink>
          <StyledLink to="cabins">Cabins</StyledLink>
          <StyledLink to="users">Users</StyledLink>
          <StyledLink to="settings">Settings</StyledLink>
        </ul>
    </Nav>
  )
}

export default Navbar