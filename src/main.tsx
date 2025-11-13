import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DatePicker } from './components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DatePicker language="fa" placeholder="Pick a date" />
  </StrictMode>,
)
