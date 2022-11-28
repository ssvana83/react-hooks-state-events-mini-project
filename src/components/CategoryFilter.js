import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ categories, getCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (<button className="selected" key={category} onClick={() => getCategory(category)}>{category}</button>))}
    </div>
  );
}

export default CategoryFilter;


