import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Room1 from './components/pages/Room1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/room1' element={<Room1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
