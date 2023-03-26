import { ToastContainer } from 'react-toastify';

import Layout from '../layouts';
import Instructions from '../components/Instructions';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-JH9CJFB9RP"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Instructions />
      <Component {...pageProps} />
      {/* <ToastContainer
        position='top-right'
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      /> */}
    </Layout>
  );
}

export default MyApp;
