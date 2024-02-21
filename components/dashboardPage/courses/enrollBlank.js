

import mytoast from "@/components/toast/toast";

function EnrollButtonb() {
  
  function enrollFunction(e) {
    e.preventDefault();

    mytoast.danger("You need to login for enrolling");
  }

  return (
    <>
      <a href="" onClick={enrollFunction} className="style-16">
        রেজিস্ট্রেশন
      </a>{" "}
    </>
  );
}

export default EnrollButtonb;
