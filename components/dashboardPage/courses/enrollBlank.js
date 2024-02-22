
function EnrollButtonb() {
  const hardRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.href = `/signup`;
    }
  };
 
  
  function enrollFunction(e) {
    e.preventDefault(); 
    hardRefresh();

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
