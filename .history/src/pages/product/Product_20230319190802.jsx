
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../Data"
import { AiOutlineCheck }  from "react-icons/ai";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
       
        
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://i0.wp.com/izoguern.com/wp-content/uploads/2019/06/syrup-de-dattes.jpg?resize=768%2C768&ssl=1" alt="" className="productInfoImg" />
                  <span className="productName">Syrup Of Dates</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">price:</span>
                      <span className="productInfoValue">25DT</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Categories:</span>
                      <span className="productInfoValue">Dattes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Quantity:</span>
                      <span className="productInfoValue">50</span>
                  </div>
                   <div className="productInfoItem">
                      <span className="productInfoKey">Description:</span>
                      <span className="productInfoValue">
                        
                      </span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                <div style={{display}}>
                <div>
                  <label>Product Name</label>
                  <input type="text" className="form-control"/>
                  <label>Quantity</label>
                  <input type="text"  className="form-control"/>
                  <label>Categories</label>
                  <input type="text" className="form-control" />
                  </div>
                  <div>
                  <label>Price</label>
                  <input type="text" className="form-control" />
                  <label>Description</label>
                  <input type="text" className="form-control" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  </div>
                  </div>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://i0.wp.com/izoguern.com/wp-content/uploads/2019/06/syrup-de-dattes.jpg?resize=768%2C768&ssl=1" alt="" className="productUploadImg" />
                      <label for="file">
                          <AiOutlineCheck/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
