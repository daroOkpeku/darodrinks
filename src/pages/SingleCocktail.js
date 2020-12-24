import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Singleone from "./singleone";

export default function SingleCocktail() {
  const joke = useParams()
  const { id } = joke
  const [loading, setLoading] = useState(false);
  const [Cocktails, setCocktails] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function GetId() {
      try {
        const collect = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const Taken = await collect.json();
        console.log(Taken)
        const { drinks } = Taken
        if (drinks) {

          const all = drinks.map((item) => {
            const { idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3 } = item
            return { id: idDrink, Alcoholic: strAlcoholic, Category: strCategory, Drink: strDrink, Image: strDrinkThumb, glass: strGlass, info: strInstructions, ingredient: `${strIngredient1}, ${strIngredient2}, ${strIngredient3}` }

          })
          setCocktails(all)

        } else {
          setCocktails(null)
        }
      } catch (error) {
        console.log(error);

      }
      setLoading(false)

    }
    GetId();
  }, [id])

  if (loading) {
    return <h1 className="section-title">loading...</h1>
  }
  if (!Cocktails) {
    return <h1 className="selection-title">information doesn't match with database</h1>
  }




  return (
    <>
      {Cocktails.map((item) => {
        return <Singleone key={item.id} item={item} />
      })}

    </>
  )
}


