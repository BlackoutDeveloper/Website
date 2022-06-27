import '../styles/globals.css'
import Layout from '../components/layout'
import {isMobile} from 'react-device-detect'

function MyApp({ Component, pageProps }) {
  if (isMobile) {
    return <div> This Webpage Is Only Accessible On Computers </div>
  }
  
  return (
    
    <>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  
  )
}

export default MyApp
