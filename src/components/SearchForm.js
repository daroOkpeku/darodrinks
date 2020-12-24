import React, { useRef, useEffect } from 'react'


const SearchForm = ({ setSearchTerm }) => {
  const searchValue = useRef("")
  useEffect(() => {
    searchValue.current.focus();
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value)

  }
  return (
    <div className="section">
      <h2 className="section-title">search Cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> search for your favorite cocktails</label>
          <input type="text" onChange={searchCocktails} ref={searchValue} name="name" />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
