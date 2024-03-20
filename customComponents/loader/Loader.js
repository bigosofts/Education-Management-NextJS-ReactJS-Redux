import Image from "next/image";
import "./Loader.css";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <Image
          width={100}
          height={100}
          className="animationName"
          style={{ margin: "auto" }}
          src="/logo.png"
        ></Image>
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "16px",
            fontWeight: "300",
          }}
        >
          Loading ...
        </h1>
      </div>
    </div>
  );
}

export default Loader;
