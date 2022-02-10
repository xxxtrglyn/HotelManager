import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import RoomList from './components/pages/RoomList';
import LoginForm from './components/pages/LoginForm'
import Room1 from './components/pages/Room1';
import RHome from './components/pages/RHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<RHome />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/RoomList' element={<RoomList />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/room1' element={<Room1 />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
