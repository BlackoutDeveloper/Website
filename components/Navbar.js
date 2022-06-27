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
  padding: 0rem 0.5rem;
`;
const Navbar = () => {
  return (
    <Nav>
      <div className='floatAboveEverything'>
              <Link href="/" passHref>
                      
                        <StyledLink>
                          <Image src="/B logo.ico" width={90} height={90} layout="fixed" ></Image>
                        </StyledLink>
                      
              </Link>
      </div>
      <div className='floatAboveEverything'>
        <Link href="/about" passHref>
          <StyledLink>
          <Image src="/About.png" width={241} height={90} layout="fixed"></Image>
          </StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>
          <Image src="/ContactNavig.png" width={285} height={90} layout="fixed"></Image>
          </StyledLink>
        </Link>
        <Link href="/rww" passHref>
          <StyledLink>
            <Image src="/rwwNav.png" width={285} height={116} layout="fixed"></Image>
          </StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar
