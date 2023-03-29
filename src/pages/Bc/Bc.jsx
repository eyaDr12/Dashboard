import React, { useState } from 'react';
import './Bc.css';

function OrderReceipt() {
  const [order, setOrder] = useState({
    clientName: 'John Doe',
    product: 'Product name',
    quantity: 1,
    price: 10,
    date: new Date().toLocaleDateString(),
  });

  return (
    <div className="order-receipt">
      <h1 className='bc'>Bon De Commande</h1>
      <div className="receipt-container">
      <h2>Récapitulatif de commande</h2><br/><br/>
        <div className="receipt-item">
          <span className="item-label">Nom du client:</span>
          <span className="item-value">{order.clientName}</span>
         
        </div>
        <hr   WIDTH="700" />
        <div className="receipt-item">
          <span className="item-label">Produit:</span>
          <span className="item-value">{order.product}</span>
        </div>
        <hr   WIDTH="700" />
        <div className="receipt-item">
          <span className="item-label">Quantité:</span>
          <span className="item-value">{order.quantity}</span>
        </div>
        <hr   WIDTH="700" />
        <div className="receipt-item">
          <span className="item-label">Prix unitaire:</span>
          <span className="item-value">{order.price} €</span>
        </div>
        <hr   WIDTH="700" />
        <div className="receipt-item">
          <span className="item-label">Date de commande:</span>
          <span className="item-value">{order.date}</span>
        </div>
        <hr   WIDTH="700" />
        <div className="receipt-item">
          <span className="item-label">Montant total:</span>
          <span className="item-value">{order.quantity * order.price} €</span>
        </div>
        <hr   WIDTH="700" />
      </div>
    </div>
  );
}

export default OrderReceipt;