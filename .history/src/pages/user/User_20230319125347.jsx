
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
                  placeholder="ghali"
                  className="userUpdateInput"
                />
              </div>
              
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="asma"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="exemple@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+216 ...."
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
            
            
              <div className="userUpdateItem">
                <label>District</label>
                <input
                  type="text"
                  placeholder="jasmin"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Code Postal</label>
                <input
                  type="text"
                  placeholder="2036"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>ville</label>
                <input
                  type="text"
                  placeholder="tunis"
                  className="userUpdateInput"
                />
              </div>
             
            </div>
            <div className="userUpdateRight2">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/edit-social-media-profile-5295893-4412910.png"
                  alt=""
                /></div>
                 
                 <button className="userUpdateButton">Update</button>
                </div>

          </form>
        </div>
      </div>
   
  );
}
