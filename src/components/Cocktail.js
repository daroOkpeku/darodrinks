import React from 'react'
import { Link } from "react-router-dom"

export default function Cocktail({ items }) {
  const { id, Drink, glass, Alcoholic, image } = items
  return (
    <div className="cocktail">
      <article className="img-container">
        <img src={image} alt={Drink} />
      </article>
      <aside className="cocktail-footer">
        <h3>{Drink}</h3>
        <h4>{glass}</h4>
        <p>{Alcoholic}</p>
        <Link to={`/Cocktail/${id}`} className="btn btn-primary btn-details">details</Link>
      </aside>
    </div>
  )
}


