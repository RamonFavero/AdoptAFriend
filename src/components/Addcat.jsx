import React, { useState } from "react";
import {useAuth0} from "@auth0/auth0-react";


function Addcat (props) {
  const {
    user,
    isAuthenticated,
  } = useAuth0()
  const [inputText, setInputText] = useState([]);
  
  
  function handleChange(event) {
    const name = event.target.name

   if (name==="img") {
    setInputText({...inputText, catImg:event.target.value
    })
   } else if (name==="catName") {
    setInputText({...inputText, catName:event.target.value
    })
   } else if (name==="sex") {
    setInputText({...inputText, catSex:event.target.value
   })
   }else if (name==="trait") {
      console.log(inputText);
    setInputText({...inputText, catTrait:event.target.value
   })
  }else if (name==="fivFelv") {
    console.log(inputText);
  setInputText({...inputText, fivFelv:event.target.value
 })
  }};

  
  // codigo a baixo feito para checar se o usuario é alguem em especifico
  // se for essa pessoa, libera o card para adcionar novos gatos
if (true) { // mudar para | isAuthenticated | (foi colocado "true" para expor no github)

  if (true) { // | user.sub === "facebook|5394296354001619" |
    return (
      <div className="row">
           <div className="cartao">
        <form autoComplete="off">
        <input className="sinput" onChange={handleChange} name="img" value={inputText.catImg} type="url" placeholder="Link of an image" />
        <input className="sinput" onChange={handleChange} name="catName" value={inputText.catName} type="text" placeholder="Name" />
        {/* <input onChange={handleChange} name="sex" value={inputText.catSex} type="text" placeholder="Sex" /> */}
        <select className="sinput" onChange={handleChange} name="sex" >
        <option value={inputText.catSex}>Sex</option>
            <option value={inputText.catSex}>Macho</option>
            <option value={inputText.catSex}>Femea</option>
        </select>
        
        <input className="sinput" onChange={handleChange} name="trait" value={inputText.catTrait} type="text" placeholder="Trait" />
        {/* <input onChange={handleChange} name="fivFelv" value={inputText.fivFelv} type="radio" placeholder="Fiv/Felv" /> */}
        <select className="sinput" onChange={handleChange} name="fivFelv" >
        <option value={inputText.fivFelv}>Fiv/Felv</option>
            <option value={inputText.fivFelv}>Positivo</option>
            <option value={inputText.fivFelv}>Negativo</option>
        </select>
       
        <button id="formbutton" className="login" onClick={(e)=>{
            props.onAdd(inputText);
            e.preventDefault();
            setInputText({
              catImg:"",
              catName:"",
              catSex:"",
              catTrait:"",
              fivFelv:""
            });
        }}>Register Cat</button>
        </form>
        </div>  
        </div>
        )
  }
}else {
return ""
}
 
    }

export default Addcat;
