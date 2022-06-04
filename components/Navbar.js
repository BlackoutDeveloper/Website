import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const Nav = styled.nav`
        height: 80px;
        background: #000;
        color: #e00;
        display: flex;
        justify-content: space-between;
        align-items: center
`;
/*
const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e00;
`;
*/
const StyledLink = styled.a`
  padding: 0rem 2rem;
`;
const Navbar = () => {
  return (
    <Nav>
      <div>
              <Link href="/" passHref>
                      <StyledLink>NXT</StyledLink>
              </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact Me</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar
