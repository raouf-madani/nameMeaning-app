import React,{useState} from 'react';
import '../addNameMeaning.css';


const AddNameMeaning = props => {
    const [nameInfo,setNameInfo]= useState({
        name:"",
        description:""
    });
    
    const changeHandler = event=>{
         const {value,name} = event.target; // destructuring
        
         /*if(name === "name"){
                return {
                    name: value,
                    description:prevValue.description
                }
            } else if(name==="description"){
               return {
                   name:prevValue.name,
                   description:value
               }
            } */

         setNameInfo(prevValue=>({...prevValue,[name]:value})); //...prevValue (spread Operator)
    };

    
    return (
       <div className="tnSection">
       <div className="tncontainer">
         
               <input className="tnInput" name="name" placeholder="Name" value={nameInfo.name} onChange={changeHandler} />
               <textarea className="tnTxtArea" name="description" placeholder="Write your name description..." value={nameInfo.description} onChange={changeHandler}>
                      
               </textarea>
               <button className="tnBtn" onClick={()=>{
                   
                   props.onAdd(nameInfo)
                    }
                   } >Add</button>
          
       </div>
       </div>
    );

};

export default AddNameMeaning;