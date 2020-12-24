import React from 'react'
import { Link } from "react-router-dom"
export default function singleone({ item }) {
    console.log(item)
    const { Alcoholic, Category, Drink, Image, glass, info, ingredient } = item

    return (
        <div className="section cocktail-section">
            <Link to="/" className="btn btn-primary">home page</Link>

            <h2 className="section-title">{Drink}</h2>
            <article className="drink">
                <img src={Image} alt={Drink} />
                <aside className="drink-info">
                    <p>name: {Drink}</p>
                    <p>Category: {Category}</p>
                    <p>info: {info}</p>
                    <p>glass: {glass}</p>
                    <p>Alcoholic: {Alcoholic}</p>
                    <p>ingredient: {ingredient}</p>

                </aside>
            </article>
        </div>

    )
}
