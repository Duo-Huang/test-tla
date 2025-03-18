import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from '@/store'
import App from './App.tsx'


console.log(store.getState().count)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
