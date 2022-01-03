// import React from "react";

// export default function Recipe({ name, ingredients, steps}) {
//   return(
//     <section id="baked-salmon">
//       <h1>{name}</h1>
//       <ul className="ingredients">
//         {ingredients.map((ingredient, i)=> (
//           <li key={i}>{ingredient.name}</li>
//         ))}
//       </ul>
//       <section className="instruction">
//         <h2>조리 절차</h2>
//         {steps.map((step, i)=>(<p key={i}>{step}</p>))}
//       </section>
//     </section>
//   );
// }

import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";


function Recipe({name, ingredients, steps}){
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="조리 절차" steps={steps} />
    </section>
  );
}

export default Recipe;