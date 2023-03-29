import React, { useState } from "react";
import "./SaleInf.css";

const initialData = [
  {
    month: "Janvier",
    orderDate: "01/01/2022",
    initialStock: 100,
    delivery: 50,
    finalStock: 150
  },
  {
    month: "Février",
    orderDate: "02/01/2022",
    initialStock: 150,
    delivery: 75,
    finalStock: 225
  },
  {
    month: "Mars",
    orderDate: "03/01/2022",
    initialStock: 225,
    delivery: 80,
    finalStock: 305
  }
];

export default function App() {
  const [data, setData] = useState(initialData);

  const handleAddRow = () => {
    setData([
      ...data,
      {
        month: "",
        orderDate: "",
        initialStock: 0,
        delivery: 0,
        finalStock: 0
      }
    ]);
  };

  const handleDeleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleDataChange = (index, key, value) => {
    const newData = [...data];
    newData[index][key] = value;
    setData(newData);
  };

  return (
    <div className="Appvt">
      <h1 className="h1apro">Approvisionnement des produits</h1>
      
      <table >
        <thead>
          <tr>
            <th>Mois</th>
            <th>Date de commande</th>
            <th>Stock initial</th>
            <th>Livraison</th>
            <th>Stock final</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.month}
                  onChange={(e) =>
                    handleDataChange(index, "month", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  value={item.orderDate}
                  onChange={(e) =>
                    handleDataChange(index, "orderDate", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.initialStock}
                  onChange={(e) =>
                    handleDataChange(index, "initialStock", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.delivery}
                  onChange={(e) =>
                    handleDataChange(index, "delivery", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.finalStock}
                  onChange={(e) =>
                    handleDataChange(index, "finalStock", e.target.value)
                  }
                />
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteRow(index)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={handleAddRow}>
        Ajouter une ligne
      </button>
    </div>
  );
}





