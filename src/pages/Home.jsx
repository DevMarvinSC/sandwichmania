import headermenu from "../components/headermenu"
import footergeneral from "../components/footergeneral";
import './Home.css'
function Home(){
    return(
        <div className="HomeContainer">
            {headermenu()}
            <div>
                
                <h1>
                    Beta 1.2.0
                    Aquí empieza la magia
                </h1>
                <span><b>Sitio en construcción</b></span>
            </div>

            {footergeneral()}

        </div>

    )

};
export default Home;