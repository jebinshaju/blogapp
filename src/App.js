import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBlog from './components/AddBlog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/add' element={<AddBlog/>}/>

      </Routes>
    </div>
  );
}

export default App;
