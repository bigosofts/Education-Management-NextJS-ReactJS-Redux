


function NoteCard() {
 
  return (
    <div style={{width: "450px",height:"200px",backgroundColor:"rgb(243 242 205)", padding:"20px 20px", margin:"auto", borderRadius:"5px", boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.6)"}} classname="noteCard">
      <div style={{textAlign:"center", fontSize:"24px", fontWeight:"500", textTransform:"capitalize", marginBottom:"10px"}} classname="main-cat">Admission ongoing..</div>
      <h3 style={{textAlign: "center"}}><i className="fa fa-check"></i> Hifzul Quran</h3>
      <h3 style={{textAlign: "center"}}><i className="fa fa-check"></i> Child Maktab</h3>
      <h3 style={{textAlign: "center"}}><i className="fa fa-check"></i> Farze Ayin Nazera</h3>
      <h3 style={{textAlign: "center"}}><i className="fa fa-check"></i> Abacus Brain Math</h3>
      
    </div>
  );
}

export default NoteCard;
