import "./newProduct.css";
import {BsCamera} from 'react-icons/bs'
export default function NewProduct() {
  return (
    <div>
            <h1 className="addProductTitle">New Product</h1>

  
    <div className="newProduct">
      <form className="addProductForm">
    
      
        <div className="addProductItem">
          <label>Image</label>
          <div className="newProduct_img"><BsCamera style={{fontSize:'65px' ,color:"gray" ,marginLeft:"80px"}}/><input type="file" id="file" style={{marginLeft:"40px"}}  /></div>
          
        </div>
        <div style={{display:'flex' ,gap:'4.1rem'}}>
        <div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" className="form-control3" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text"  className="form-control3"/>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text"  className="form-control3" />
        </div>
        </div>
        <div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text"  className="form-control3" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text"  className="form-control3" />
        </div>
        <div className="addProductItem">
          <label>Availablity</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        </div>
        </div>
        <button className="addProductButton">Create</button>
      
      </form>
      
    </div>
    </div>
  );
}
