

function AbacusStudentPage({ params }) {
  return (
    <div
      style={{
        marginTop: "80px",
        marginLeft: "20px",
        width: "100%",
        height: "auto",
        overflowY: "scroll",
      }}
    >
      <h1 style={{textAlign:"center"}}>This is your User ID: {params.adminslug}</h1>
      <p style={{margin:"50px auto", fontSize:"24px",textAlign:"center"}}>Dear gardian, <br/> You can access our free courses which are available for you from this dashboard</p>
      
      
    </div>
  );
}

export default AbacusStudentPage;
