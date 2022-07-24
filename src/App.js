
import './App.css';
import Home from './components/Home/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Blogs from './components/Home/Blogs/Blogs';
import Header from './components/Shared/Header/Header';
import Books from './components/Books/Books';
import Dashboard from './components/Home/Dashboard/Dashboard';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/books' element={<Books></Books>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
