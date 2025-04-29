import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css';
import App from './App.jsx'
import '../public/css/style.css';
import '../public/css/bootstrap.min.css';
import '../public/css/bootstrap.css';
import '../public/css/nivo-lightbox/nivo-lightbox.css';
import '../public/css/nivo-lightbox/default.css'; 
import '../public/fonts/font-awesome/css/font-awesome.css';
import '../public/fonts/font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister();
