"use client";

import React, { useState, useRef } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

const PdfEditor = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const canvasRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setPdfFile(file);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const loadedPdf = await PDFDocument.load(arrayBuffer);
      setPdfDoc(loadedPdf);

      const firstPage = loadedPdf.getPage(0);
      const { width, height } = firstPage.getSize();

      const canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff"; // White background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await firstPage.render({
        canvasContext: ctx,
        viewport: firstPage.getViewport({ scale: 1.0 }),
        background: rgb(1, 1, 1),
      }).promise;
      
    } catch (error) {
      console.error("Error loading PDF:", error);
    }
  };

  const savePdf = async () => {
    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const newPdf = await PDFDocument.create();
      const [newPage] = await newPdf.copyPages(pdfDoc, [0]);
      newPdf.addPage(newPage);

      const existingPage = newPdf.getPages()[0];
      existingPage.drawImage(imageData, {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
      });

      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      saveAs(blob, "edited.pdf");
    } catch (error) {
      console.error("Error saving PDF:", error);
    }
  };

  return (
    <div>
      <h1>PDF Editor</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {pdfFile && (
        <div>
          <canvas ref={canvasRef} style={{ border: "1px solid black" }} />
          <br />
          <button onClick={savePdf}>Save PDF</button>
        </div>
      )}
    </div>
  );
};

export default PdfEditor;
