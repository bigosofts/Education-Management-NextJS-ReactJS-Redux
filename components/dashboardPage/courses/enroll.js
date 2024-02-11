"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import mytoast from "@/components/toast/toast";

function EnrollButton({ courseCode }) {
  const router = useRouter();
  const data = useSelector((state) => state.isAdmin.value);

  function enrollFunction(e) {
    e.preventDefault();
    if (data.data) {
      router.push(`/dashboard/${data.data.userName}/fees?enroll=${courseCode}`);
    } else {
      mytoast.info("You need to Signin to enroll a Class");
    }
  }

  return (
    <>
      <Link href="" onClick={enrollFunction} className="style-16">
        Enroll Now
      </Link>{" "}
    </>
  );
}

export default EnrollButton;
