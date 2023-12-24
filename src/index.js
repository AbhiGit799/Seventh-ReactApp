import { Component } from "react";
import ReactDOM from "react-dom/client";
import {AppIndex} from "./app"

class AIndex extends Component
{

  render()
  {
    return(<>
     
     <AppIndex/>
    
    </>)
  }

}


const aroot = ReactDOM.createRoot(document.getElementById("root"));
aroot.render(<AIndex/>);






