import React from 'react'
import Cocktail from './Cocktail'
export default function CocktailList({ Cocktails, loading }) {
  if (loading) {
    return <h2 className="section-title">loading...</h2>
  }
  if (Cocktails.length === 0) {
    return <h2 className="section-title">its doesn't match your search</h2>
  }
  return (
    <div className="section">
      <h2 className="section-title"> Cocktails</h2>
      <section className="cocktails-center">
        {Cocktails.map((item) => {
          return <Cocktail key={item.id} items={item} />
        })}
      </section>
    </div>
  )
}


