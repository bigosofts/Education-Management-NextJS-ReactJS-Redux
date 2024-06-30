const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

const CLIENT_ID =
  "58356191028-sanr21ousop6rpp7nusu9njqj2ckgc6g.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const REFRESH_TOKEN =
  "1//04aWr0UFYfqbtCgYIARAAGAQSNwF-L9IrjhOyQA02LE7ILyGn-3yGse9NYGbIAY-S23dbQ1Z9kwBTT6--ksueuDWQva-xRFG8Ep4";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Set the refresh token
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const drive = google.drive({
  version: "v3",
  auth: oAuth2Client,
});

const filePath = path.join(__dirname, "a.pdf");

exports.uploadFileToDrive = () => {
  try {
    drive.files
      .create({
        requestBody: {
          name: "attendance.pdf",
          mimType: "application/pdf",
        },
        media: {
          mimeType: "application/pdf",
          body: fs.createReadStream(filePath),
        },
      })
      .then((res) => {
        console.log(res);
      });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteFileFromDrive = () => {
  const fileId = "1IJPQiTY2fYclaleg37XsH3Ej4crfpX3J";
  try {
    drive.files
      .delete({
        fileId,
      })
      .then((res) => {
        console.log(res);
      });
  } catch (err) {
    console.log(res);
  }
};

exports.readFileUrlFromDrive = () => {
  try {
    const fileId = "1IJPQiTY2fYclaleg37XsH3Ej4crfpX3J";
    drive.permissions
      .create({
        fileId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      })
      .then((res) => {
        if (res.status == 200) {
          drive.files
            .get({
              fileId,
              fields: "webViewLink, webContentLink",
            })
            .then((res) => {
              console.log(res);
            });
        }
      });
  } catch (err) {
    console.log(res);
  }
};
