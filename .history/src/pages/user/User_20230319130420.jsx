
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
     
        <div className="userUpdate">
          
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div><br/>
              
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
            
            </div>
            <div className="userUpdateRight">
            <div className="userUpdateItem">
                <label>State</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
            
              <div className="userUpdateItem">
                <label>city</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>ZIP code</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>home address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
             
            </div>
            <div className="userUpdateRight2">
              
                 
                 <button className="userUpdateButton">Update</button>
                </div>

          </form>
        </div>
      </div>
   
  );
}
