import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// TODO: Reduce this to only needed fonts
import '@fontsource/source-sans-pro/200.css';
import '@fontsource/source-sans-pro/300.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-sans-pro/900.css';
import '@fontsource/source-sans-pro/200-italic.css';
import '@fontsource/source-sans-pro/300-italic.css';
import '@fontsource/source-sans-pro/400-italic.css';
import '@fontsource/source-sans-pro/600-italic.css';
import '@fontsource/source-sans-pro/700-italic.css';
import '@fontsource/source-sans-pro/900-italic.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
