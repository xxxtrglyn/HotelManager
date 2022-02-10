import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import RoomList from './components/pages/RoomList';
import LoginForm from './components/pages/LoginForm'
import Room1 from './components/pages/Room1';
import Room2 from './components/pages/Room2';
import RHome from './components/pages/RHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<RHome />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/RoomList' element={<RoomList />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/room1' element={<Room1 />} />
          <Route path='/room2' element={<Room2 />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
