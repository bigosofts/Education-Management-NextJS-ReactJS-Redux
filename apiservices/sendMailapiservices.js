exports.sendMail = async (toEmail, subject, text, html) => {
  const payloaddata = {
    toEmail: toEmail,
    subject: subject,
    text: text,
    html: html,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
