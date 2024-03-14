import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { QueryClient, QueryClientProvider}from "react-query"

import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate.tsx";


const queryClient =new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
    </QueryClientProvider>
  </React.StrictMode>
);
