import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`;
const Heading = styled.h1`
  color: #e00;
  font-size: 10rem;
  font-weight: 900;
`
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/B logo.ico" />
      </Head>
      <div>
        <Image src="/indexbg.jpg" layout='fill'></Image>
      </div>
      <div style={{position:"fixed",left:"50%",top:"40%",transform: "translate(-50%, -50%)"}}>
        <Image src="/bitmap.png" height={270.78085642317} width={1000}></Image>
      </div>
      
    </>
    
  )
}/*
<div>
        <Image src="/bitmap.png" height={270.78085642317} width={1000} style="top:50"></Image>
      </div>


      
      /* div style={{display: "flex",justifyContent: "center",}} 
      
      
      <div style={{position:"fixed"}}>
        <Image src="/OpnerBracket.png" height={775} width={854}></Image>
      </div>*/
      