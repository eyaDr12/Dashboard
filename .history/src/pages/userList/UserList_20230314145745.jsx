import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";
import { userRows } from "../../dummyData";
import { useState } from "react";
import { AiFillEye }  from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "First Name",
      headerName: "First Name",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
         {params.row.fname}
          </div>
        );
      },
    },
    {
      field: "Last Name",
      headerName: "Last Name",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
         {params.row.lname}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 200 },
    
    {
      field: "PhoneNumber",
      headerName: "Phone Number",
      width: 180,
    },
    {
      field: "Adress",
      headerName: "Adress",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            
            <TfiPencil
              on
              className="userListEdit"
            
            />
            
            <AiFillEye
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
    <div className="userList">
       <button className="userAddButton">Create</button>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{height:"500px"}}
      />
    </div>
  );
}
