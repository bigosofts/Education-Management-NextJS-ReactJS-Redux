function EnrollButtonb({ code }) {
  const hardRefresh = () => {
    if (typeof window !== "undefined") {
      if (code == "hifjulquran") {
        window.location.href = `/hifz-test?signup=true`;
      } else if (code == "ezranahusorof") {
        window.location.href = `/signup?code=alemalema`;
      } else if (code == "urdu") {
        window.location.href = `/signup?code=alemalema`;
      } else {
        window.location.href = `/signup?code=${code}`;
      }
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
