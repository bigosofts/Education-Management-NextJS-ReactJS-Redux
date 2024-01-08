"use client";

import { useEffect } from "react";
import RichTextEditor from "@/customComponents/RichTextEditor/RichTextEditor";

function AbacusPlay() {
  useEffect(() => {
    import("./abacus.css");
    import("./abacus.js");
  }, []);
  return (
    <>
    <div className="abacusDesign">
      <div className="abacusChild">
        <div id="myAbacus"></div>
        <p style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "bolder" }}>NB: </span>For more beads you
          can simply rotate your phone to horizontal or use higher resolution
          device
        </p>
      </div>
      
    </div>
    <RichTextEditor/>
    </>
    
  );
}

export default AbacusPlay;
