import React, { useState, useEffect } from "react";
function Food(){
    return (
<div>
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