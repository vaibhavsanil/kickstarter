import React from 'react';
import { Container } from 'semantic-ui-react';

import Head from 'next/head';

import Header from './Header';

function Layout(props) {
  return (
    <Container>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>

      <Header />
      {props.children}
      <h1>Im a Footer</h1>
    </Container>
  );
}

export default Layout;
