function ShowPaymentDetails({ account }) {
  if (account == "bkash-merchant") {
    return (
      <div className="bg-slate-900 text-white p-5 mb-10 rounded-3xl">
        <h1 className="text-inherit text-lg underline underline-offset-4 mb-2">
          Dial *247# from your mobile:
        </h1>
        <p className="text-md text-slate-300">1. Choose “Payment”</p>
        <p className="text-md text-slate-300">
          2. Enter the Merchant bKash Account Number (01791 845 122) you want to
          pay to.
        </p>
        <p className="text-md text-slate-300">
          3. Enter the amount (ex. 1530) you want to pay
        </p>
        <p className="text-md text-slate-300">
          4. Enter a reference* against your payment (you can mention the
          purpose of the transaction in one word. e.g. Bill)
        </p>
        <p className="text-md text-slate-300">
          5. Enter the Counter Number* (the salesperson at the counter will tell
          you the number)
        </p>
        <p className="text-md text-slate-300">
          6. Now enter your bKash Mobile Menu PIN to confirm
        </p>
        <p className="text-md text-slate-300">
          6. Don't forget to save 2 information. 1. TrxId 2. The Phone Number
          (if the bkash is done from the shop)
        </p>

        <h2 className="text-white text-[16px] mt-4">
          Done! You will receive a confirmation message from bKash.
        </h2>
      </div>
    );
  } else if (account == "bKash-personal") {
    return (
      <div className="bg-slate-900 text-white p-5 mb-10 rounded-3xl">
        <h1 className="text-inherit text-lg underline underline-offset-4 mb-2">
          Dial *247# from your mobile:
        </h1>
        <p className="text-md text-slate-300">1. Choose “Send Money”</p>
        <p className="text-md text-slate-300">
          2. Enter the bKash Account Number (01674 04 05 02) you want to send
          money to
        </p>
        <p className="text-md text-slate-300">
          3. Enter the amount (ex. 1530) you want to send
        </p>
        <p className="text-md text-slate-300">
          4. Enter a reference about the transaction. (Do not use more than one
          word, avoid space or special characters)
        </p>
        <p className="text-md text-slate-300">
          5. Now enter your bKash Mobile Menu PIN to confirm the transaction
        </p>
        <p className="text-md text-slate-300">
          6. Don't forget to save 2 information. 1. TrxId 2. The Phone Number
          (if the bkash is done from the shop)
        </p>

        <h2 className="text-white text-[16px] mt-4">
          Done! You will receive a confirmation message from bKash.
        </h2>
      </div>
    );
  } else if (account == "nagad-personal") {
    return (
      <div className="bg-slate-900 text-white p-5 mb-10 rounded-3xl">
        <h1 className="text-inherit text-lg underline underline-offset-4 mb-2">
          Dial *167# from your mobile:
        </h1>
        <p className="text-md text-slate-300">1. Choose “Send Money”</p>
        <p className="text-md text-slate-300">
          2. Enter the Nagad Account Number (01674 04 05 02) you want to send
          money to
        </p>
        <p className="text-md text-slate-300">
          3. Enter the amount (ex. 1530) you want to send
        </p>
        <p className="text-md text-slate-300">
          4. Enter a reference about the transaction. (Do not use more than one
          word, avoid space or special characters)
        </p>
        <p className="text-md text-slate-300">
          5. Now enter your Nagad Mobile Menu PIN to confirm the transaction
        </p>
        <p className="text-md text-slate-300">
          6. Don't forget to save 2 information. 1. TrxId 2. The Phone Number
          (if the Nagad is done from the shop)
        </p>

        <h2 className="text-white text-[16px] mt-4">
          Done! You will receive a confirmation message from Nagad.
        </h2>
      </div>
    );
  } else if (account == "rocket-personal") {
    return (
      <div className="bg-slate-900 text-white p-5 mb-10 rounded-3xl">
        <h1 className="text-inherit text-lg underline underline-offset-4 mb-2">
          Dial *322# from your mobile:
        </h1>
        <p className="text-md text-slate-300">1. Choose “Send Money”</p>
        <p className="text-md text-slate-300">
          2. Enter the Rocket Account Number (01674 04 05 023) you want to send
          money to
        </p>
        <p className="text-md text-slate-300">
          3. Enter the amount (ex. 1530) you want to send
        </p>
        <p className="text-md text-slate-300">
          4. Enter a reference about the transaction. (Do not use more than one
          word, avoid space or special characters)
        </p>
        <p className="text-md text-slate-300">
          5. Now enter your Rocket Mobile Menu PIN to confirm the transaction
        </p>
        <p className="text-md text-slate-300">
          6. Don't forget to save 2 information. 1. TrxId 2. The Phone Number
          (if the Nagad is done from the shop)
        </p>

        <h2 className="text-white text-[16px] mt-4">
          Done! You will receive a confirmation message from Rocket.
        </h2>
      </div>
    );
  } else if (account == "paypal") {
    return (
      <div className="bg-slate-900 text-white p-5 mb-10 rounded-3xl">
        <h1 className="text-inherit text-lg underline underline-offset-4 mb-2">
          Open your PayPal account in a browser:
        </h1>
        <p className="text-md text-slate-300">1. Go to Send and Request</p>
        <p className="text-md text-slate-300">
          2. Enter the recipient's name (ex. Raju Talukder), PayPal username
          (@internetmadrasa), email address (ex. internetmadrasa@outlook.com),
          or mobile number (+393278144880), and click Next.
        </p>
        <p className="text-md text-slate-300">
          3. Enter the amount, choose the currency, add an (optional) note, and
          click Continue.
        </p>
        <p className="text-md text-slate-300">
          4. If available, choose your payment type.
        </p>
        <p className="text-md text-slate-300">
          5. Choose how you want to pay and click Next.
        </p>

        <h2 className="text-white text-[16px] mt-4">
          Done! You will receive a confirmation message from PayPal.
        </h2>
      </div>
    );
  } else if (account == "dbbl-bank") {
    return (
      <div className="bg-slate-900 text-white p-5 mb-10 rounded-3xl">
        <h1 className="text-inherit text-lg underline underline-offset-4 mb-2">
          Go to your Nearest Bank or Bank online portal to initiate transfer
        </h1>
        <p className="text-md text-slate-300">
          Recipient's Bank Account Details:
        </p>
        <p className="text-md text-slate-300">
          <strong>Account No: </strong>126 101 56434
        </p>
        <p className="text-md text-slate-300">
          <strong>Account Name: </strong>MOHAMMAD HASIBUR RAHMAN
        </p>
        <p className="text-md text-slate-300">
          <strong>Bank Name: </strong>Dutch Bangla Bank Ltd.
        </p>
        <p className="text-md text-slate-300">
          <strong>Branch Name: </strong>Elephant Road
        </p>
        <p className="text-md text-slate-300">
          <strong>Swift Code: </strong>DBBLBDDH
        </p>

        <h2 className="text-white text-[16px] mt-4">
          Complete payment procedure using above details
        </h2>
      </div>
    );
  } else if (account == "ebl-bank") {
    return <div className="bg-slate-900 text-white p-5 mb-10 rounded-3xl">
    <h1 className="text-inherit text-lg underline underline-offset-4 mb-2">
      Go to your Nearest Bank or Bank online portal to initiate transfer
    </h1>
    <p className="text-md text-slate-300">
      Recipient's Bank Account Details:
    </p>
    <p className="text-md text-slate-300">
      <strong>Account No: </strong>170 145 000 1520
    </p>
    <p className="text-md text-slate-300">
      <strong>Account Name: </strong>MOHAMMAD HASIBUR RAHMAN
    </p>
    <p className="text-md text-slate-300">
      <strong>Bank Name: </strong>Eastern Bank Ltd.
    </p>
    <p className="text-md text-slate-300">
      <strong>Branch Name: </strong>Savar
    </p>
    <p className="text-md text-slate-300">
      <strong>Routing No: </strong> 095264093
    </p>

    <h2 className="text-white text-[16px] mt-4">
      Complete payment procedure using above details
    </h2>
  </div>
  }
}

export default ShowPaymentDetails;
