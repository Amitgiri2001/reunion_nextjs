import '../styles/globals.css';
import NavFooter from '../Components/Template/NavFooter';
import Navbar from '../Components/Navbar/Navbar';

import Footer from '../Components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
