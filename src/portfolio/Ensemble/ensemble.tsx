import Header from "../header/header"
import Section1 from "../Section1/Section1"
import Section2 from "../section2/section2"
import Service from "../Services/service"
import "../../../public/assets/css/portfolio/Ensemble/ensemble.scss"
import Portfolio from "../Portfolio/portfolio"
import Contact from "../Contact/contactme"

const Ensemble =()=>{


    return(
        <>
        <div id="ensemble">
            <Header/>
            <Section1/>
            <Service/>
            <Section2/>
            <Portfolio/>
            <Contact/> 
            <footer>
                ©2025 Razafindrainibe Avotra Harilala Patrick. Tous droits réservés.
            </footer>
        </div>
        </>
    )
}
export default Ensemble