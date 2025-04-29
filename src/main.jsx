/*
//This is a React application entry point file. It imports the necessary modules and renders the main App component into the root element of the HTML document.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

import  {createRoot} from 'react-dom/client';
import App from './App.jsx';
const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);