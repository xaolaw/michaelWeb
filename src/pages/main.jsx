import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../styles/index.css';
import Footer from './Footer';
import Layout from './Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout></Layout>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
