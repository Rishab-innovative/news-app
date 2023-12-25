
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Business from './pages/business';
import Entertainment from './pages/entertainment';
import General from './pages/general';
import Health from './pages/health';
import Science from './pages/science';
import Sports from './pages/sports';
import Technology from './pages/technology';

const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/business" element={<Business/>}/>
      <Route path="/entertainment" element={<Entertainment/>}/>
      <Route path="/general" element={<General/>}/>
      <Route path="/health" element={<Health/>}/>
      <Route path="/science" element={<Science/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/technology" element={<Technology/>}/>
    </Routes>
  
   </BrowserRouter>

  );
}

export default App;
