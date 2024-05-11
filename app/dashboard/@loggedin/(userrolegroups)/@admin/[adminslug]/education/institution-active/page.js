"use client";
import { selectDataTwo } from "@/apiservices/abacusinstitutionapiservices";
import { useState, useEffect } from "react";
import "./pending.css";

function InstitutionPending() {
  const [institution, setInstitution] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo({ activeStatus: "active" }, null);
      if (res.status == "Alhamdulillah") {
        setInstitution(res.data);
      }
    }
    getData();
  }, []);

  if (institution) {
    return (
      <div className="hifz_table">
        <div class="table_container mt-10">
          <table>
            <thead className="sticky top-0">
              <tr>
                <th>Institution ID</th>
                <th>Institution Name</th>
                <th>Principal Name</th>
                <th>Principle Phone</th>
                <th>Representative Name</th>
                <th>Representative Phone</th>
                <th>Institutional Email</th>
                <th>Students Number </th>
                <th>Payment Number</th>
                <th>Registration Fee Amount</th>
                <th>Registration PaymentWay</th>
                <th>Payment TransactionID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {institution &&
                institution.map((item, i) => (
                  <tr key={i}>
                    <td>{item.institutionID}</td>
                    <td>{item.institutionName}</td>
                    <td>{item.principalName}</td>
                    <td>{item.directorPhone}</td>
                    <td>{item.representativeName}</td>
                    <td>{item.representativePhone}</td>
                    <td>{item.institutionalEmail}</td>
                    <td>{item.studentsNumber} </td>
                    <td>{item.paymentNumber}</td>
                    <td>{item.registrationFeeAmount}</td>
                    <td>{item.registrationPaymentWay}</td>
                    <td>{item.paymentTransactionID}</td>
                    <td>
                      <button className="py-2 px-5 rounded-xl text-white bg-emerald-800">
                        Approved
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default InstitutionPending;
