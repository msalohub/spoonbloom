// pages/_app.js
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}