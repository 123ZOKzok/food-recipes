import React, { useState, useEffect } from "react";


const API_URL = 'www.themealdb.com/api/json/v1/1/search.php?f=a';

    const Food = () => {
        const [searchTerm, setSearchTerm] = useState("");
        const [show,setShow]=useState(false);
        const [item,setItem]=useState("");
    
    return (
<div className="food">
<div className="heading">
                <h1>FOOD RECIPES</h1>
            </div>
            <div className="search">
                <input  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={searchRecipe} placeholder="Search for recipes"/>
            </div>
            <div className="container">
                {
                    show ?<MealItem data={item} /> :"Not Found"
                
                }
            </div>
</div>
    );

}
export default Food;