import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import ReacipeIndex from "./RecipeIndex";


const API_URL = 'www.themealdb.com/api/json/v1/1/search.php?f=a';

const Food = () => {
        const [searchTerm, setSearchTerm] = useState("");
        const [show,setShow]=useState(false);
        const [item,setItem] = useState([]);

        useEffect(()=>{
            fetch(API_URL).then(res=>res.json()).then(data=> {
                setItem(data.meals);
                setShow(true);
            })
         },[API_URL])
    
  const searchRecipe=(search)=>{
    const API_URL=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
}
const setIndex=(alpha)=>{
   const API_URL=`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`;
}
    
    return (
<div className="food">
<div className="heading">
                <h1>FOODIE LAND</h1>
            </div>
            <div className="search">
                <input  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={searchRecipe} placeholder="Search for recipes"/>
            </div>
            <div className="container">
                {
                    show ?<FoodItem data={item} /> :"No recipes ound"
                
                }
            </div>
            <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
</div>
    );

}
export default Food;