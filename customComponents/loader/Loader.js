import "./Loader.css";
function Loader() {
    return ( 
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height: "100vh"}}>
            <div>
            
            <img className="animationName" style={{width:"100%" , margin:"auto"}} src="/logo.png"></img>
            <h1 style={{textAlign:"center", marginTop: "20px", fontSize:"24px", fontWeight:"300"}}>Loading ...</h1>
            

            </div>
            
        </div>
     );
}

export default Loader;