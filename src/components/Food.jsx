import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import ReacipeIndex from "./RecipeIndex";

const Food = () => {
        const [search, setSearch] = useState("");
        const [show,setShow]=useState(false);
        const [item,setItem] = useState([]);
        const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
            useEffect(()=>{
                fetch(url).then(res=>res.json()).then(data=> {
                    setItem(data.meals);
                    setShow(true);
                })
             },[url])

              const searchRecipe=(evt)=>{
                  setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
             }
             const setIndex=(alpha)=>{
                 setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
             } 
    return (
<div className="food">
{/* <div className="heading">
                <h1>FOODIE LAND</h1>
            </div> */}
            <div className="search">
                <input  value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={searchRecipe} placeholder="Search for recipes"/>
            </div>
            <div className="container">
                {
                    show ?<FoodItem data={item} /> :"No recipes found"
                
                }
            </div>
            <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
</div>
    );

}
export default Food;

