import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import '../styles/index.css';
import Footer from './Footer';
import Layout from './Layout.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout></Layout>
        <Footer></Footer>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
