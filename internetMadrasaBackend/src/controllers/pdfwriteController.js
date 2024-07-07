const { uploadFileToDrive } = require("../utility/driveUtility");

const stream = require("stream");

exports.writeFileToDriveController = async (req, res) => {
  if (req.file.mimetype != "application/pdf") {
    res.status(500).json({ status: "Innalillah", data: "notPDF" });
  } else {
    const { originalname, mimetype, buffer } = req.file;

    function bufferToStream(buffer) {
      const duplexStream = new stream.Duplex();
      duplexStream.push(buffer);
      duplexStream.push(null);
      return duplexStream;
    }
    const fileMetadata = {
      name: originalname,
    };

    const media = {
      mimeType: mimetype,
      body: bufferToStream(buffer),
      fields: "id",
    };

    const output = await uploadFileToDrive(fileMetadata, media);

    if (output.status == "200") {
      res.status(200).json(output);
    } else {
      res.status(500).json({ status: "Innalillah", data: output.data });
    }
  }
};
