import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LoggedUserProvider } from './contexts/LoggedUser.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoggedUserProvider>
      <App />
    </LoggedUserProvider>
  </React.StrictMode>,
)