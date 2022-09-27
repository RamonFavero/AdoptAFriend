import React from "react";
import AllCats from "../AllCats";
// import Addcat from "./Addcat";


function createCard(props) {
  return (
      <Card 
      img={props.img}
      key={props.key}
      catName={props.catName}
      sex={props.sex}
      trait={props.trait}
      fivFelv={props.fivFelv}
       />
  )
}

function Card(props) {
    return (<div className="row">
    <div className="card">
<div className="card-img"><img className="card-img" src={props.img} alt="" /></div>
  <div className="card-info">
    <p className="text-title">{props.catName}</p>
    <p className="text-body">Sexo: {props.sex}</p>
    <p className="text-body">Gênio: {props.trait}</p>
    <p className="text-body">Fiv/Felv: {props.fivFelv}</p>
    {/* <button class="card-button" onClick={clicked}>Read More</button> */}
  </div>
</div>
</div>    
    )
}
function CardMap() {
  return <div className="row">{AllCats.map(createCard)}</div>
}

export default Card;
export {CardMap}