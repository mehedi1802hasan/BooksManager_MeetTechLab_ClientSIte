import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import Provider from './pages/Authentication/Provider.jsx';
const queryClient = new QueryClient()

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <QueryClientProvider client={queryClient}>

    <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
