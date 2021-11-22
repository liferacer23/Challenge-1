import logo from './logo.svg';
import './App.css';
import { CSSTransition } from "react-transition-group";
import Nav from './components/Nav';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
   <div className="main-container">
     <Router>
     <Nav/>
     <CSSTransition      
    in={true}
          appear={true}
          timeout={800}
          classNames="fade"
          >
     <Routes>
       <Route path='/Challenge-1' exact element={<Home/>} ></Route>
     </Routes>
     </CSSTransition> 
     </Router>

   </div>
  );
}

export default App;
