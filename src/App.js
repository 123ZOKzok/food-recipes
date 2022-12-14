import Food from './components/Food';
import Recipe from './components/Recipe';
import {Route,Routes} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/NavBar';
import Home from './components/Home';



function App() {
  return (
    <>
  
     <Navbar />
     <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route exact path="/:recipeId" element={<Food/>}/>
      </Routes>
    
    </>
     

      
  );
}

export default App;
