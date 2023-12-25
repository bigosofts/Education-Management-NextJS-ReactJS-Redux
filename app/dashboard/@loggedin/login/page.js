"use client";

import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  router.push("/dashboard/loading");
}

export default LoginPage;
