import "./newProduct.css";

export default function NewProduct() {
  return (
    <div>
            <h1 className="addProductTitle">New Product</h1>

  
    <div className="newProduct">
      <form className="addProductForm">
        <div style={{display:'flex' ,gap:'3.1rem'}}>
        <div>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file"  />
        </div>
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
        <button className="addProductButton">Create</button>
      
      </form>
      
    </div>
    </div>
  );
}
