import {Link, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Details from "./pages/Details";
import DetailPage from "./pages/DetailPage";


function App() {
  return (<>


  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/notfound' element={<NotFoundPage/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    <Route path='/details/' element={<DetailPage/>}/>
  </Routes>
  

  </>
  );
}

export default App;
