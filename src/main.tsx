import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css'
import FallbackSuspense from './components/FallbackSuspense'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<FallbackSuspense />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
