import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card, { CardMap} from "./Card";
import Addcat from "./Addcat";
import '../styles.css';

function createCard(props) {
    return (
        <Card 
        img={props.catImg}
        catName={props.catName}
        sex={props.catSex}
        trait={props.catTrait}
        fivFelv={props.fivFelv}
         />
    )
  }

function App() {
    const [newCats, setNewCats] = useState([]);

    function pushCats(inputText) {
      setNewCats(prevCats=>{
        return [...prevCats,inputText]
      });
       console.log(newCats);
    };
  
  //  facebook|5009870732444185
 return (
 <div>
 <Header />
    <div className="rows">
    <CardMap />
    {newCats.map(createCard)}
    <Addcat onAdd={pushCats} />   
    </div>
 <Footer />
</div>
)}

export default App;