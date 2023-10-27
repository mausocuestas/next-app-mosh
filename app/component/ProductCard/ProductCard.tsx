import React from 'react'
import AddToCart from '../AddToCart'

const ProductCard = () => {
  return (
    // CHAVES porque estou injetando js no HTML
    // className paranão conflitar com a palavra reservada do JS class
    <div >
      <AddToCart />
    </div>
  )
}

export default ProductCard
 