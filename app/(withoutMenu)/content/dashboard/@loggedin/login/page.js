"use client";

import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  router.push("/content/dashboard/loading");
}

export default LoginPage;
