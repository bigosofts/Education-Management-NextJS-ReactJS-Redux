import Link from "next/link";
function ButtonComponent({ text, link }) {
  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "auto",
        padding: "100px 0px 0px 0px",
      }}
    >
      <Link
        href={link}
        style={{
          backgroundColor: "#fff",
          transitionDuration: "0.3s",
          transitionProperty:
            "color, background-color, border-color, text-decoration-color, fill, stroke",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          color: "#BEA256",
          fontWeight: 900,
          paddingRight: "20px",
          paddingLeft: "28px",
          paddingBottom: "12px",
          paddingTop: "12px",
          borderRadius: "4px",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          textDecoration: "none solid rgb(255, 255, 255)",
          border: "2px solid rgb(219, 225, 235)",
          boxSizing: "border-box",
          textTransform: "uppercase",
        }}
      >
        {text}
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "matrix(1, 0, 0, 1, 4, 0)",
            transitionDuration: "0.15s",
            transitionProperty: "transform",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            display: "block",
            verticalAlign: "middle",
            border: "0px solid rgb(219, 225, 235)",
            boxSizing: "border-box",
          }}
        >
          <polyline
            points="9 18 15 12 9 6"
            style={{
              border: "0px solid rgb(219, 225, 235)",
              boxSizing: "border-box",
            }}
          />
        </svg>
      </Link>
    </div>
  );
}

export default ButtonComponent;
