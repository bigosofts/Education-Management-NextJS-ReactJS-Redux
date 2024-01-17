function NoteCard() {
  return (
    <div
      style={{
        width: "450px",
        backgroundColor: "rgb(243 242 205)",
        padding: "20px 20px",
        margin: "auto",
        borderRadius: "5px",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
      }}
      className="noteCard"
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "500",
          textTransform: "capitalize",
          marginBottom: "10px",
        }}
        className="main-cat"
      >
        {true ? "ভর্তি চলমান..." : "Admission Ongoing..."}
      </div>
      <h3 style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i> {true ? "হিফজুল কুরআন" : "Hifzul Quran"}
      </h3>
      <h3 style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i> {true ? "শিশু মক্তব" : "Child Maktab"}
      </h3>
      <h3 style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>{" "}
        {true ? "ফরজে আইন নাজেরা" : "Farze Ayin Nazera"}
      </h3>
      <h3 style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>{" "}
        {true ? "অ্যাবাকাস" : "Abacus Brain Math"}
      </h3>
    </div>
  );
}

export default NoteCard;
