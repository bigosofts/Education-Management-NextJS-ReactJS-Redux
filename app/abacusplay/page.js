"use client";

import { useEffect } from "react";

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
          <p style={{ textAlign: "center", width: "90%", margin: "auto" }}>
            <span style={{ fontWeight: "bolder" }}>NB: </span>For more beads you
            can simply rotate your phone to horizontal or use higher resolution
            device
          </p>
        </div>
      </div>
    </>
  );
}

export default AbacusPlay;
