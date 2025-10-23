import React from "react";
import headermenu from "../components/headermenu";
import footergeneral from "../components/footergeneral";
import './Sandwich.css'
function Sandwiches(){
    return(
        <div className="SandwichesContainer container">
            {headermenu()}
            <h1>Preparando un melanguche de sanwinesa</h1>
            <h3>con exprimón limido</h3>
            {footergeneral()}
        </div>
    )


} export default Sandwiches;