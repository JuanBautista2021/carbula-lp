import { useEffect } from "react";
import TagManager from 'react-gtm-module';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { getGTMid } from '../utils/helpers';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: getGTMid() });
  }, [pageProps.COUNTRY_CODE]);
  return <Component {...pageProps} />
}

export default MyApp