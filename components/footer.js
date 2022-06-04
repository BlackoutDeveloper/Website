import React from 'react'
import styled from 'styled-components'
const FooterSection = styled.div`
        background: #000;
        color: #e00;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
`
const Footer = () => {
  return (
    <FooterSection>
      <p>Developed By Blackout</p>
    </FooterSection>
  )
}

export default Footer
