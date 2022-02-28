import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NameMeaning from './components/NameMeaning';
import AddNameMeaning from './components/AddNameMeaning';

function App() {
 const [names, setNames]= useState([]);

 const addNames = tapedNames=>{
   return (
     setNames(prevValues => {
      return [...prevValues,tapedNames]
     })
   )
 };

 const deleteName = id=>{
    setNames (prevValues=>{
       return prevValues.filter((item,index)=>{
           return index !== id
      });

    });
 };

  return (
    <div className="App">
     <Header />
     <AddNameMeaning onAdd={addNames} />
     {names.map((name,index) =><NameMeaning deleteNameInfo={deleteName} id={index} key={index} title={name.name} content={name.description}/>)}
     <Footer />
    </div>
  );
}

export default App;