import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './../assets/styles/config.css';
import AppRootProvider from './AppRootProvider';
// import { QueryClient, QueryClientProvider } from "react-query";
import { baseUrl, queryOption } from '../utils';
import axios from 'axios'

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnmount: false,
//       refetchOnReconnect: false,
//       retry: false
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRootProvider>
        {/* <QueryClientProvider client={queryClient}> */}
          <App />
        {/* </QueryClientProvider> */}
      </AppRootProvider>
    </BrowserRouter>
  </React.StrictMode>
);
