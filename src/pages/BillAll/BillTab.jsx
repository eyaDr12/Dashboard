
import { DataGrid } from '@mui/x-data-grid';
import { BillRows } from "../../Data";
import { AiOutlineEye }  from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function UserList() {
  const [data, setData] = useState(BillRows);
  const navigate = useNavigate();
  
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
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
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
            {params.row.Prodname}
            </div>
          );
        },
      },

    {
      field: "Transaction",
      headerName: "Transaction Volume",
      width: 180,
    },
    {
        field: "Statue",
        headerName: "Statue",
        width: 180,
      },
      {
        field: "Date",
        headerName: "Date",
        width: 180,
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            
       
          
          <AiOutlineEye
            className="userListSee"
            onClick={()=>navigate('/Bill')}
            
            
          />
         
        </>
        );
      },
    },
  ];

  return (
    <div>
      <h1>Orders</h1>
    <div className="orderList">
    <p style={{color:"white"}}>Orders</p>

      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{marginLeft:'20px',width:"96.5%",marginTop:'50px',height:"550px"}}

      />
    </div>
    </div>
  );
}
