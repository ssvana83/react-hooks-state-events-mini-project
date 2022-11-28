import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ categories, getCategory }) {
  // console.log(categories)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category =>(<button className="selected" key={category} onClick={() => getCategory(category)}>{category}</button>))}
    </div>
  );
}

export default CategoryFilter;

//css deliverable button should have a class of selected when clicked

