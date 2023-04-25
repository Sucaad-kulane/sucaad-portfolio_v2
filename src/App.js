import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact';
import Project from './pages/Project';
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div >
        <Header/>
        <Routes>
          <Route path="/" element={<Home name= {"Sucaad"} title={"web developer"} />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Project/>}/>


        </Routes>


      </div>
    </Router>
  );
}

export default App;
