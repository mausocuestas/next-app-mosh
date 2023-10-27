import React from 'react'
import AddToCart from '../AddToCart'

const ProductCard = () => {
  return (
    // CHAVES porque estou injetando js no HTML
    // className paranão conflitar com a palavra reservada do JS class
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>
      <AddToCart />
    </div>
  )
}

export default ProductCard
 