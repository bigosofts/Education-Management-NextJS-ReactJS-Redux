// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");

// // Create a new OAuth2 client with the credentials
// const oAuth2Client = new google.auth.OAuth2(
//   YOUR_CLIENT_ID,
//   YOUR_CLIENT_SECRET,
//   YOUR_REDIRECT_URL
// );

// // Set the refresh token
// oAuth2Client.setCredentials({
//   refresh_token: YOUR_REFRESH_TOKEN,
// });

// // Get an access token
// const getAccessToken = async () => {
//   const accessToken = await oAuth2Client.getAccessToken();
//   return accessToken.token;
// };

// const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
//   console.log("Email is run");

//   // Create Nodemailer transporter using OAuth2
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: "internetmadrasha@gmail.com",
//       clientId: YOUR_CLIENT_ID,
//       clientSecret: YOUR_CLIENT_SECRET,
//       refreshToken: YOUR_REFRESH_TOKEN,
//       accessToken: await getAccessToken(),
//     },
//   });

//   let mailOptions = {
//     from: "Internet Madrasa <internetmadrasha@gmail.com>",
//     to: EmailTo,
//     subject: EmailSubject,
//     text: EmailText,
//   };

//   return await transporter.sendMail(mailOptions);
// };

// module.exports = SendEmailUtility;
