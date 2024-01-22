import Link from "next/link";
import "./ButtonComponent.css";
function ButtonComponent({ text, link }) {
  return (
    <div className="buttonComponent">
      <Link
        href={link}
        className="buttonLinkText"
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
