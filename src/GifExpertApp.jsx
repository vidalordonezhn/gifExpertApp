import { useState } from 'react'
import { GifGrid, AddCategory } from './components'
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one piece'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
    1
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* <AddCategory setCategories={setCategories} /> */}
      <AddCategory onNewValue={(event) => onAddCategory(event)} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />
      })}
    </>
  )
}
