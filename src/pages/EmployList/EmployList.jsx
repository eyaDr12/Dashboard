import "./EmployList.css";
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";
import { userRows } from "../../Data";
import { useState } from "react";
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
      width: 150,
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
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
         {params.row.lname}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 300 },
    
    {
      field: "PhoneNumber",
      headerName: "Phone Number",
      width: 180,
    },
     
    {
      field: "payslip",
      headerName: "payslip",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
        <button  onClick={()=>navigate('/Fiche')}>show</button>
          </div>
        );
      },
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
              style={{marginLeft:"-10px"}}
              onClick={()=>navigate('/EditEmp')}

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
      <h1>Employee</h1>
    <div className="employList">
          
       <button className="userAddButton"   onClick={()=>navigate('/CreateEmploy')}>Create</button>
       
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{height:"520px",marginLeft:'20px',width:"96%"}}
      />
    </div>
    </div>
  );
}
