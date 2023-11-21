import Food from './components/Food';
import Recipe from './components/Recipe';
import {Route,Routes} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/NavBar';





function App() {
  return (
    <>
  
     <Navbar />
     <Routes>
      <Route  path="/" element={<Food/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
    <Recipe/>
    </>
     

      
  );
}
