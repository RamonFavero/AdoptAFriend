import React from "react";
import {useAuth0} from "@auth0/auth0-react";



function Header() {

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
  } = useAuth0()

  function clicked(e) {
    e.preventDefault();
        window.location.href='/Addcat';
  }

 
   
  
    return (
      
            <header>
            <div>
            <img className="pawImg" src="https://cdn.pixabay.com/photo/2016/04/22/14/32/paws-1345885_960_720.png" alt="paws" />
            </div>
            <div>
            <a id="linkUnderline" href="/"><h1 >Friend to the rescue</h1></a>
            <h3>{isAuthenticated ? "Olá " + user.name : "Faça o login para continuar"}</h3>
            
              </div>
              <div className="divlogin">
              
              
              {isAuthenticated && (
              <button className="logout" onClick={logout} >Logout</button>
              )}
              </div>
            </header>
            
    )
}
export default Header;