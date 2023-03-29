import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../Data";
import { AiOutlineDelete } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";
import { AiOutlineEye }  from "react-icons/ai";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    
    {
      field: "price",
      headerName: "Price",
      width: 160,
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
    <div className="productList">
        <button className="userAddButton">Create</button>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{height:"500px",marginLeft:'80px',width:"90%",marginTop:'20px'}}
      />
    </div>
  );
}
