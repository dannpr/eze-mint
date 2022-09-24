import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DeployContract from './components/DeployContract'
/* import MintPage from './components/MintPage';
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*     <MintPage />
 */}    <DeployContract />
  </React.StrictMode>
);

