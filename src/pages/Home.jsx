import headermenu from "../components/headermenu"
import footergeneral from "../components/footergeneral";
import './Home.css'
function Home(){
    return(
        <div className="HomeContainer">
            {headermenu()}
            <div>
                Beta 1.0.4
                Aquí va todo el contenido inicio
            </div>

            {footergeneral()}

        </div>

    )

};
export default Home;