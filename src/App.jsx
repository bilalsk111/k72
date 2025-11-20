import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agency from './pages/Agency';
import Works from './pages/Works';
import Navbar from './components/nav/Navbar';
import FullNav from './components/nav/FullNav';



const App = () => {

  return (
    <div className='main py-5vh'>
      <FullNav />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agency' element={<Agency />} />
          <Route path='/works' element={<Works />} />
        </Routes>
    </div>
  );
};

export default App;
