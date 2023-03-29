import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../Data";
import { AiOutlineDelete } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";
import { AiOutlineEye }  from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const navigate = useNavigate();

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

    {
      field: "Availablity",
      headerName: "Availablity",
      width: 120,
    },
    { field: "Categories", headerName: "Categories", width: 180 },

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
            onClick={()=>navigate('/Product')}
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
    <div></div>
    <div className="productList">
        <button className="userAddButton" onClick={()=>navigate('/NewProduct')}>Create</button>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{height:"500px",marginLeft:'80px',width:"90%"}}
      />
    </div>
  );
}
