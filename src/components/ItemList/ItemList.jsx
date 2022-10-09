import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 m-8">
      {items.map((item,index) =><Item key={index} item={item}/>)}
    </div>
  )
}

export default ItemList
