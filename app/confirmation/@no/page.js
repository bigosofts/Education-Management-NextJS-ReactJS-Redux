"use client";
import Error from "next/error";

function ErrorComponent() {
  return <Error statusCode={404} />;
}

export default ErrorComponent;
