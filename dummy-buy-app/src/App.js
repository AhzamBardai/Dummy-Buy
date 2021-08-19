import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Main from './main/Main.jsx'
import About from './about/About.jsx'
import ProductInfo from './main/product-info/ProductInfo.jsx'


function App() {

  const [items, setItems] = useState([])

  const getItems = () => {

    const url = 'https://fakestoreapi.com/products/'

    fetch(url)
        .then(res => res.json())
        .then(res => {
            setItems(res)
        })
        .catch(err => console.log(err))
  }

  useEffect(() => getItems(), [])

  return (
    <div>
      <Route exact path='/' component={() => <Main items={items} setItems={setItems} getItems={getItems} />} ></Route>

      <Route exact path='/about' component={About} ></Route>

      <Route exact path='/product/:id' component={(routerProps) =>  <ProductInfo items={items} match={routerProps.match.params} {...console.log(routerProps)} />  } ></Route>
    </div>
  );
}

export default App;
