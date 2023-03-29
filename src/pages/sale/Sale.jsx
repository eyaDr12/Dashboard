import "./Sale.css";
import { DataGrid } from '@mui/x-data-grid';
import { SaleRows } from "../../Data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TfiPencil } from "react-icons/tfi";



export default function UserList() {
  const [data] = useState(SaleRows);
  const navigate = useNavigate();
  
  
  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.Username}
          </div>
        );
      },
    },
    
    {
        field: "Quantity sold",
        headerName: "Quantity sold",
        width: 170,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              {params.row.QteVend}
            </div>
          );
        },
      },
    
      {
        field: "Quantity Not sold",
        headerName: "Quantity Not sold",
        width: 170,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              {params.row.QteRest}
            </div>
          );
        },
      },
      {
        field: "Turnover ",
        headerName: "Turnover",
        width: 170,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              {params.row.ChiffreA}
            </div>
          );
        },
      },
      
      {
        field: "Kanban",
        headerName: "Kanban",
        width: 180,
        renderCell: (params) => {
          return (
            <div className="userListUser">
          <button  onClick={()=>navigate('/Tache')}>show</button>
            </div>
          );
        },
      },
      


    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            

            <TfiPencil
            on
            className="userListEdit"
            style={{marginLeft:"-10px"}}
            onClick={()=>navigate('/SaleInf')}
          />
        </>
        );
      },
    },
  ];

  return (
    <div>
      <h1 className="Is">Sales Information </h1>
    <div className="saleList">
    <p style={{color:"white"}}>Orders</p>

      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{marginLeft:'20px',width:"1150px",marginTop:'40px',height:"550px"}}

      />
    </div>
    </div>
  );
}
