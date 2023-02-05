import React from "react";
import './WhatsappStyles.css'
import {  FaWhatsapp} from 'react-icons/fa'
const WhatsApp = () => {
  return (
    <a className="whatsapp"
        href="https://api.whatsapp.com/send?phone=5511958194016&text=Hey"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "0px",
        color: "#FFF",
        textAlign: "center",
        fontSize: "0px",
        padding: "5px",
        textDecoration: "none",
        zIndex: "100",
        
        marginRight: '10px',
        background:'green',
        borderRadius:'50%'
      }}
    >
      <FaWhatsapp className="whatsapp" size={30} />
    </a>
  );
};

export default WhatsApp;