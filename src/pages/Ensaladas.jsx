import React from "react";

import headermenu from "../components/headermenu";
import footergeneral from "../components/footergeneral";
function Ensaladas(){
    return(
        <div className="ContenedorEnsaladas container">
            {headermenu()}
            <h1>Ensaladas</h1>
            {footergeneral()}
        </div>

    )


};

export default Ensaladas;