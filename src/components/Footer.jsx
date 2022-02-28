import React from 'react';
import '../footer.css';


const Footer = () => {
 
    const copyrightDate= new Date().getFullYear();
    

    return (
       <div className="footerContainer">
           <p>Copyright ⓒ {copyrightDate} </p>
       </div>
    );

};

export default Footer;