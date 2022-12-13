import React from 'react'
import Products from '../../components/products/Products'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./ProductList.scss"
import ProductData from "../../productsource"
export default function List({title, link}) {

  return (
    <div className='list'>
    <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        
        <ProductData link={link} title={title}/> 
      </div>
    </div>
  )
}
