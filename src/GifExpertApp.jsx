
import {useState} from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
  
  const [Categories, setCategories] = useState([])
  const onAddCategory=(newCategory)=>{
    if (Categories.includes(newCategory)) return;
    setCategories([newCategory,...Categories]);
  }

  return (
    <>
      <h1>Gif Finder</h1>
      <h5>powered by Giphy</h5>
    <AddCategory
        onNewCategory={ onAddCategory }
      />
      
      
      {
        Categories.map(category=>(
            <GifGrid 
                key={category} 
                category={category}
            />
          ))
      }
    
    </>
  )
}
