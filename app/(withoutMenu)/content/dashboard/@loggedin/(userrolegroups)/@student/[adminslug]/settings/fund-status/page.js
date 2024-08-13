"use client";

import { useSelector } from "react-redux";
import mytoast from "@/components/toast/toast";

function ResetPassword() {
  const data = useSelector((state) => state.isAdmin.value);

  return <h1>Something</h1>;
}

export default ResetPassword;
