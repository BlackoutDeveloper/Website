import React from 'react'
import styled from 'styled-components'
const FooterSection = styled.div`
        background: #22e;
        color: #fff;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
`
const Footer = () => {
  return (
    <FooterSection>
      <p>Developed By Blackout</p>
    </FooterSection>
  )
}

export default Footer
