import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommend from "./Recommended/Recommend"
import Sidebar from "./sidebar/Sidebar"
import "./indec.css"
import { useState } from "react"
import products from "./db/data"
import Card from "./components/Card"
function App() {
  const [query,setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleInputChange = (event)=>{
    setQuery(event.target.value);
    
  }
  const filteredItems = products.filter((product)=> product.title.toLowerCase().indexOf(query.toLowerCase())!==-1
  )
  
  const handleChange = (event)=>{
    setSelectedCategory(event.target.value);
  }
  
  const handleClick = (event)=>{
    setSelectedCategory(event.target.value);
  }
  console.log(handleClick)
 
  function filteredData(products,selected,query){
    let filteredpro = products;
    
    if(query){
      filteredpro = filteredItems;
      
    }
    if(selected){
      console.log(selected)
      filteredpro = filteredpro.filter(({category,newPrice,company,color,title})=> category===selected||newPrice===selected ||company===selected||color===selected|| title===selected
      )
      console.log(filteredpro);
    }
    return filteredpro.map(({img,title,star,reviews,newPrice,prevPrice})=>
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star = {star}
      reviews ={reviews}
      newPrice = {newPrice}
      prevPrice = {prevPrice}
     />
    )
  }
  let result = filteredData(products,selectedCategory,query);

  
 return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation handleInputChange={handleInputChange} query={query}/>
      <Recommend handleClick={handleClick}/>
      <Products result={result}/>
    </>
  )
}

export default App
