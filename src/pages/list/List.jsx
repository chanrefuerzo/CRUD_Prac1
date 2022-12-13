import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./list.scss"

export default function List({title, link}) {

  return (
    <div className='list'>
    <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable link={link} title={title}/> 
      </div>
    </div>
  )
}
