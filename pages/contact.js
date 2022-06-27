import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="/B logo.ico" />
      </Head>
      <div style={{position: "fixed", left: "35%", top: "10%"}}>
        <Image src="/ContactNavig.png" width={700} height={191}></Image>
      </div>
    </>
  )
}
