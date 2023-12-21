"use client";

import { useEffect } from "react";

function AbacusPlay() {
  useEffect(() => {
    import("./abacus.js");
    import("./abacus.css");
  }, []);
  return (
    <div className="abacusDesign">
      <div className="abacusChild">
        <div id="myAbacus"></div>
      </div>
    </div>
  );
}

export default AbacusPlay;
