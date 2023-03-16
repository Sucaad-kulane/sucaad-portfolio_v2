import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact';
import Project from './pages/Project';
import Header from "./components/Header";


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
