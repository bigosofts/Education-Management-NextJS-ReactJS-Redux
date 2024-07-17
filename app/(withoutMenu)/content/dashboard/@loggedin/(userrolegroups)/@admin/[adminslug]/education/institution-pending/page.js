"use client";
import {
  selectDataTwo,
  updateData,
} from "@/apiservices/abacusinstitutionapiservices";
import { useState, useEffect } from "react";
import "./pending.css";
import mytoast from "@/components/toast/toast";

function InstitutionPending() {
  const [institution, setInstitution] = useState();
  const [stateChange, setStateChange] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo({ activeStatus: "inactive" }, null);
      if (res.status == "Alhamdulillah") {
        setInstitution(res.data);
      }
    }
    getData();
  }, [stateChange]);

  async function updateAbacusInstitution(
    Name,
    principalName,
    studentsNumber,
    directorPhone,
    representativeName,
    representativePhone,
    institutionalEmail,
    registrationFeeAmount,
    registrationPaymentWay,
    paymentTransactionID,
    paymentNumber,
    abacusBookOrderlimit,
    abacusKitOrderlimit,
    password,
    status,
    id,
    batchCount
  ) {
    const res2 = await updateData(
      Name,
      principalName,
      studentsNumber,
      directorPhone,
      representativeName,
      representativePhone,
      institutionalEmail,
      registrationFeeAmount,
      registrationPaymentWay,
      paymentTransactionID,
      paymentNumber,
      abacusBookOrderlimit,
      abacusKitOrderlimit,
      password,
      status,
      id,
      batchCount
    );
    if (res2.status == "Alhamdulillah") {
      setStateChange((prev) => !prev);
      mytoast.success("Approved Successfully");
    }
  }

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
                      <button
                        onClick={() =>
                          updateAbacusInstitution(
                            item.institutionName,
                            item.principalName,
                            item.studentsNumber,
                            item.directorPhone,
                            item.representativeName,
                            item.representativePhone,
                            item.institutionalEmail,
                            item.registrationFeeAmount,
                            item.registrationPaymentWay,
                            item.paymentTransactionID,
                            item.paymentNumber,
                            item.abacusBookOrderlimit,
                            item.abacusKitOrderlimit,
                            undefined,
                            "active",
                            item._id,
                            item.batchCount
                          )
                        }
                        className="py-2 px-5 rounded-xl bg-blue-500 hover:bg-blue-900 text-white"
                      >
                        {" "}
                        Approve{" "}
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
