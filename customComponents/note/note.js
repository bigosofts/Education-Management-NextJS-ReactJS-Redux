import "./note.css";
import Link from "next/link";
function NoteCard() {
  return (
    <div className="noteCard">
      <div className="main-cat">
        {true ? "ভর্তি চলমান..." : "Admission Ongoing..."}
      </div>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>
        <Link href="/classes/alemalema">
          {true ? "আলেম আলেমা" : "Alem Alema"}
        </Link>
      </h3>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>
        <Link href="/classes/hifjulquran">
          {true ? "হিফজুল কুরআন" : "Hifzul Quran"}
        </Link>
      </h3>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>
        <Link href="/classes/shishumaktab">
          {true ? "শিশু মক্তব" : "Child Maktab"}
        </Link>
      </h3>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>{" "}
        <Link href="/classes/farzeayinnajera">
          {true ? "ফরজে আইন নাজেরা" : "Farze Ayin Nazera"}
        </Link>
      </h3>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>{" "}
        <Link href="/abacus">{true ? "অ্যাবাকাস" : "Abacus Brain Math"}</Link>
      </h3>
    </div>
  );
}

export default NoteCard;
