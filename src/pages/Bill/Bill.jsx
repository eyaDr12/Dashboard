import React from 'react';
import './Bill.css';
import Logo from '../../Assets/Logo.png'

function Invoice() {
  return (
    <div className="invoice">
      <div className="header">
        <div className="logo">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="company-info">
          <h2>Mon entreprise</h2>
          <p>123 Rue des exemples</p>
          <p>75000 Paris</p>
          <p>Tél : 01 23 45 67 89</p>
        </div>
      </div>
      <div className="customer-info">
        <h3>Facture pour :</h3>
        <p>John Doe</p>
        <p>456 Rue des exemples</p>
        <p>75000 Paris</p>
        <p>Tél : 01 23 45 67 89</p>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Produit 1</td>
            <td>2</td>
            <td>10 DT</td>
            <td>20 DT</td>
          </tr>
          <tr>
            <td>Produit 2</td>
            <td>1</td>
            <td>20 DT</td>
            <td>20 DT</td>
          </tr>
          <tr>
            <td>Produit 3</td>
            <td>3</td>
            <td>5 DT</td>
            <td>15 DT</td>
          </tr>
          <tr>
            <td align='center'  colSpan={3}>TVA (19 %)</td>
            <td>10.45 DT</td>
            
          </tr>
        </tbody>
      </table>
      <div className="total">
        <strong>Total :</strong>
        <span >65.45 DT</span>
      </div>
      <button className="print-button" onClick={() => window.print()}>Imprimer</button>
    </div>
  );
}

export default Invoice;