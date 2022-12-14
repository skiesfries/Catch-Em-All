import React from 'react';
import '../styles/globals.css';
import '../styles/styles.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';

export default function App({ Component, pageProps }) {
  return (
  <StateContext>
    <Layout>
      <Toaster/>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}


