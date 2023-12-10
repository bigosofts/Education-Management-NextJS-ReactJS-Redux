import React from "react";

const GoogleMap = () => {
  return (
    <div style={{marginTop:"20px"}}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.125381605787!2d90.26884077597435!3d23.849681084956412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebc960455309%3A0x9a0889a860e24977!2sInternet%20Madrasa!5e0!3m2!1sbn!2sbd!4v1702099317650!5m2!1sbn!2sbd"
        style={{ border: 0 }}
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
