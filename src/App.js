import logo from './logo.svg';
import './App.css';

import Navbar from "./components/navbar"
import Search from "./components/search"
import Perfume from "./components/perfume_list"
import About from "./components/about"
import Footer from "./components/footer"


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Search></Search>
    <Perfume></Perfume>
    <About></About>
    <Footer></Footer>
    </div>
  );
}

export default App;
