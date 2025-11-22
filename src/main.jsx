import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter  basename="/">
    <Stairs>
      <NavContext>
        <App />
      </NavContext>
    </Stairs>
  </BrowserRouter>
);
