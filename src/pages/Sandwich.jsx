import React from "react";
import headermenu from "../components/headermenu";
import footergeneral from "../components/footergeneral";
function Sandwiches(){
    return(
        <div className="SandwichesConatiner container">
            {headermenu()}
            <h1>Sandwich</h1>
            {footergeneral()}
        </div>
    )


} export default Sandwiches;