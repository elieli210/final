// React
import React, { useState } from 'react'
// React
// CSS
import './App.css'
// CSS
// Models
import { I_Product, I_sendTime } from './Models/interfaces'
// Models
// Data
import { _products } from './Data/products'
import { recommandToAddToCart } from './Data/recommandToAddToCart'
// Data
// Components
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'
import RecommandToAddingCart from './Components/RecommandToAddingCart/RecommandToAddingCart'
import SelectedCopon from './Components/SelectedCopon/SelectedCopon'
import Description from './Components/Description/Description'
import DeliveryTime from './Components/DeliveryTime/DeliveryTime'
import SubmitBtn from './Utils/SubmitBtn/SubmitBtn'
// Components

const App = () => {
  // States
  const [products, setProducts] = useState<I_Product[]>(_products)
  //
  const [currentSendTime, setCurrentSendTime] = useState<I_sendTime>({
    start: '06:00',
    end: '08:00',
    price: 0,
  })
  // States
  // Handlers
  const onIncrementHandler: Function = (id: string) => {
    const copyOfProducts = [...products]
    const selectedProductIndex: number = copyOfProducts.findIndex((item) => item.id === id)
    copyOfProducts[selectedProductIndex].count += 1
    setProducts(copyOfProducts)
  }
  //
  const onDecrementHandler: Function = (id: string) => {
    const copyOfProducts = [...products]
    const selectedProductIndex: number = copyOfProducts.findIndex((item) => item.id === id)
    if (copyOfProducts[selectedProductIndex].count === 1) {
      copyOfProducts.splice(selectedProductIndex, selectedProductIndex + 1)
      setProducts(copyOfProducts)
      return
    }
    copyOfProducts[selectedProductIndex].count -= 1
    setProducts(copyOfProducts)
  }
  //
  const addToCartHandler = (id: string) => {
    const coptOfState = [...products]
    const selectedItemFromRecomanded = recommandToAddToCart.findIndex((item) => item.id === id)
    if (coptOfState.findIndex((item) => item.id === id) === -1) {
      const copyOfRecomanded = [...recommandToAddToCart]
      coptOfState.push(copyOfRecomanded[selectedItemFromRecomanded])
      setProducts(coptOfState)
      return
    } else {
      return
    }
  }
  // Handlers
  return (
    <>
      {/* {window.innerWidth < 600 ? ( */}
      <div className="w-full h-max px-5">
        <Header />
        <SelectedCopon />
        <Products
          onDecrementHandler={onDecrementHandler}
          onIncrementHandler={onIncrementHandler}
          products={products}
        />
        <RecommandToAddingCart addToCartHandler={addToCartHandler} />
        <Description />
        <DeliveryTime currentSendTime={currentSendTime} setCurrentSendTime={setCurrentSendTime} />
        <SubmitBtn
          cartItemPrice={products
            .map((item) => item.price * item.count)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
          sendPrice={currentSendTime.price}
        />
      </div>
    </>
  )
}

export default App
