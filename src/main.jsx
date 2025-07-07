import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import App from './App.jsx'
import { ThemeProvider } from 'react-bootstrap'

createRoot(document.getElementById('root')).render(
  <ThemeProvider dir='rtl'>
    <App />
  </ThemeProvider>
)
