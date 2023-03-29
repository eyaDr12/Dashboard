import "./Orders.css";
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete } from "react-icons/ai";
import { OrderRows } from "../../Data";

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
              <img className="productListImg" src={params.row.Prodimg} alt="" />
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
            <a href="/">
              <button className="userListEdit">Edit</button>
            </a>
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
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{height:"700px",marginLeft:'20px',width:"98%",marginTop:'20px'}}

      />
    </div>
  );
}
