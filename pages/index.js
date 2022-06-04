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
      <Hero>
        <Heading>BLACKOUT</Heading>
      </Hero>
    </>
    
  )
}
