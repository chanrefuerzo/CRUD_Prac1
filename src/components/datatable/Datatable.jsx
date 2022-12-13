import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesource"
import { Link } from 'react-router-dom';

 
export default function Datatable({title, link}) {
    console.log(link, "link")

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to={link} style={{textDecoration: "none"}}>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }

    }
  ]
  return (
    <div className='datatable'>
      <div className="dataTitle">
        {title}
          <Link to={link} style={{textDecoration: "none"}} className="link">
          Add New  
          </Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
