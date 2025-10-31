import About from './About';
import Mainpage from './Mainpage';
import Profile from './Profile';
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Project from './Project';
import Contact from './Contact';
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='//'element={<Mainpage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>


        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
