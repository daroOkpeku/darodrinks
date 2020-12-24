import React, { useState, useEffect } from 'react'
import List from "../components/CocktailList"
import SearchForm from "../components/SearchForm"
/* useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${SearchTerm}`).then(
      Response => Response.json()).then(data => setCocktails(data.drinks))
  }, [SearchTerm])*/

export default function Home() {
  const [loading, setloading] = useState(false);
  const [SearchTerm, setSearchTerm] = useState('')
  const [Cocktails, setCocktails] = useState([])
  useEffect(() => {
    async function getdata() {
      try {
        setloading(true)
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${SearchTerm}`)
        const Resource = await data.json();
        const { drinks } = Resource

        if (drinks) {
          const items = drinks.map((item) => {
            const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = item
            return { id: idDrink, Drink: strDrink, glass: strGlass, Alcoholic: strAlcoholic, image: strDrinkThumb }
          })
          setCocktails(items)
        } else {
          setCocktails([])

        }
      } catch (error) {
        console.log(error)
      }
      setloading(false)
    }
    getdata();

  }, [SearchTerm])
  return (
    <div>
      <SearchForm setSearchTerm={setSearchTerm} />
      <List loading={loading} Cocktails={Cocktails} />
    </div>
  )
}


