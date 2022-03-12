import Home from '../src/Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import '../src/index.css';



const App = () => {
    return (
        
        
       
       
        <BrowserRouter>
              <Navbar/>
                    <Routes>

                      {/* <Navbar/> */}
                      <Route path="/" element={<Home/>}/>
                       <Route path="/home" element={<Home/>}/>
                       <Route path="/about"  element={<About/>}/>
                       <Route path="/contact"  element={<Contact/>}/>
               </Routes>
        </BrowserRouter>

    );
}

export default App;