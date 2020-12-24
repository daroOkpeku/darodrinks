import React from 'react'
import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div className="error-page section">
      <section className="error-container">
        <h1>Please go to HomePage</h1>
        <Link to="/" className="btn btn-primary">home</Link>
      </section>
    </div>
  )
}


