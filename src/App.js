import Food from './components/Food';
import Recipe from './components/Recipe';
import {Route,Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route  path="/" element={<Food/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
  );
}

export default App;
