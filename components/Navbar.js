import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
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
  background: #fff;
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
                      
                        <StyledLink>
                          <Image src="/B logo.ico" width={90} height={90} layout="fixed" ></Image>
                        </StyledLink>
                      
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

/*
<a>
                          <Image src="/B logo.ico" width={90} height={90} ></Image>
                        </a>
                      */