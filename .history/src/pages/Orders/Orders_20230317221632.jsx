import "./Orders.css";
import { DataGrid } from '@mui/x-data-grid';
import { OrderRows } from "../../Data";
import { AiOutlineDelete } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";
import { AiOutlineEye }  from "react-icons/ai";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(OrderRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
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
              <img className="productListImg" src="https://i0.wp.com/izoguern.com/wp-content/uploads/2020/05/orange-honey-scaled.jpg?resize=768%2C768&ssl=1"alt="" />
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
        field: "Location",
        headerName: "Location",
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
            
          <TfiPencil
            on
            className="userListEdit"
            style={{marginLeft:"-10px"}}
          />
          
          <AiOutlineEye
            className="userListSee"
            onClick
            
            
          />
          <AiOutlineDelete
            className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
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
    <p>Orders</p>

      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{marginLeft:'20px',width:"97.5%",marginTop:'50px',height:"560px"}}

      />
    </div>
    </div>
  );
}
