import React, { useState } from "react";
import "./Fiche.css";
import Logo from '../../Assets/Logo.png'
function Payslip() {
  
  const [salary, setSalary] = useState({
    baseSalary: 0,
    overtime: 0,
    bonus: 0,
    deductions: 0,
    netPay: 0,
  });

  

  const handleSalaryChange = (event) => {
    setSalary({
      ...salary,
      [event.target.name]: event.target.value,
    });
  };

 

  return (
  
    <div className="payslip">
        <h2> Fiche de paie </h2>
      <div className="payslip-header">
      
        <div className="logo">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="company-info">
          <h2 >Mon entreprise</h2>
          <p>123 Rue des exemples</p>
          <p>75000 Paris</p>
          <p>Tél : 01 23 45 67 89</p>
        </div>
      </div>
      <div className="customer-info">
        <h3>Fiche de paie :</h3>
        <p>John Doe</p>
        <p>456 Rue des exemples</p>
        <p>25/02/2023</p>
        <p>Tél : 01 23 45 67 89</p>
      </div>
      <br />

      <div className="payslip-details">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salaire de base</td>
              <td>
                <input
                  type="number"
                  name="baseSalary"
                  value={salary.baseSalary}
                  onChange={handleSalaryChange}
                />
              </td>
            </tr>
            <tr>
              <td>Heures supplémentaires</td>
              <td>
                <input
                  type="number"
                  name="overtime"
                  value={salary.overtime}
                  onChange={handleSalaryChange}
                />
              </td>
            </tr>
            <tr>
              <td>Bonus</td>
              <td>
                <input
                  type="number"
                  name="bonus"
                  value={salary.bonus}
                  onChange={handleSalaryChange}
                />
              </td>
            </tr>
            <tr>
              <td>Retenues</td>
              <td>
                <input
                  type="number"
                  name="deductions"
                  value={salary.deductions}
                  onChange={handleSalaryChange}
                />
              </td>
            </tr>
            <tr>
              <td>Net payé</td>
              <td>{salary.netPay}</td>
            </tr>
            
          </tbody>
        </table>
      </div>

      <div className="payslip-footer">
        <button className="print-button" onClick={() => window.print()}>Imprimer</button>
</div></div>


);
}

export default Payslip;