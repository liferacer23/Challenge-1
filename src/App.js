import logo from './logo.svg';
import './App.css';
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
     <Routes>
       <Route path='/' exact element={<Home/>} ></Route>
     </Routes>
     </Router>
   </div>
  );
}

export default App;
