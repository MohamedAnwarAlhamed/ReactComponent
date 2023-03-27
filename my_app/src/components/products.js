import React from 'react'

const PRODUCTS = ({product}) => {
    if(product === "apple") 
    {
        throw new Error("Not a found")
    }
  return (
    <div>{product}</div>
  )
}

export default PRODUCTS
