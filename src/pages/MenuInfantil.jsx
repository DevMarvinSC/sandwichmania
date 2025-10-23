import headermenu from "../components/headermenu";
import footergeneral from "../components/footergeneral";

function MenuInfantil(){
    return(
        <div className="container MenuInfantilContainer">
            {headermenu()}
            <h1>Pa' los peques!</h1>
            {footergeneral()}
        </div>


    )


}export default MenuInfantil;