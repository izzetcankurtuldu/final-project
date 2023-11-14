import {Link, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Details from "./pages/Details";


function App() {
  return (<>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/details'>Details</Link></li>
      <li><Link to='/notfound'>NotFound</Link></li>

    </ul>

  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/notfound' element={<NotFoundPage/>}/>
    <Route path='/details' element={<Details/>}/>
  </Routes>

  </>
  );
}

export default App;
