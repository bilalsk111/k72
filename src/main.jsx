// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Stairs from './components/common/Stairs.jsx';
import NavContext from './context/NavContext.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
<BrowserRouter basename="/k72/">
      <Stairs>
        <NavContext>
          <App />
        </NavContext>
      </Stairs>
    </BrowserRouter>
);
