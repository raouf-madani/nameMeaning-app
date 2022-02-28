import React from 'react';
import '../nameMeaning.css';


const NameMeaning = props => {

    

    return (
       <div className="noteContainer">
           <h1>{props.title}</h1>
           <p>{props.content}</p>
           <div className="buttonContainer">
              <p onClick={()=>{
                props.deleteNameInfo(props.id)
           }
          } >Delete</p>
           </div>
       </div>
    );

};

export default NameMeaning;