import {  useState } from 'react';
import './App.css';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Nav from './navigation/Nav';
import allProducts from './db/data';
import Card from './components/Card';

function App() {

  const [selectedCategory , setSelectedCategory] = useState(null);
  const [query , setQuery] = useState('');



  //---------input filter-------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }
  const filteredItems = allProducts.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1); // indexOf(query.toLocaleLowerCase()!==-1  checks if the product title written is found as ( -1 ) means not found


//---------radio filter-------
const handleRadioChange = (e) => {
  setSelectedCategory(e.target.value)
}


//---------buttons filter-------
const handleButtonsChange =(e) => {
  setSelectedCategory(e.target.value)
}

  const filteredData = function(selected , query , products) {
    let filteredProducts = products;

    //filtering input items
    if(query) {
      filteredProducts = filteredItems;
    }
        //filtering selected items

    if(selected){
      filteredProducts = filteredProducts.filter(({category , color , company , newPrice , title}) => 
        category===selected || color ===selected || company===selected || title===selected || newPrice===selected
      )
    }
    return filteredProducts.map(({img , title , star , reviews , newPrice}) => (
      <Card
      key={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      newPrice = {newPrice}
        />
    ));

  }

  const result = filteredData(selectedCategory , query , allProducts);


  return (
    <>
    <Sidebar handleRadioChange={handleRadioChange} />
    <Nav query={query} handleInputChange = {handleInputChange} />
    <Recommended handleButtonsChange={handleButtonsChange} />
    <Products result={result} />
    </>
  );
}

export default App;
