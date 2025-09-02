import { Link } from "react-router-dom"
import "../../assets/css/portfolio/Portfolio/port1.scss"
// import Header from "../header/header"
import Header2 from "../header/head2"
const Port3=()=>{


    return(
        <>
        <Header2/>
            <div id="detailPort">
                <div className="detailPort">
                    <div className="text1">
                        <Link to={"/"} > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                            </svg>
                        </Link>
                        <h2>Page d'accueil Mi-Produits</h2>
                        <p>C'est la vitrine principale du site Mi-Produits.</p>
                    </div>
                    <div className="img">
                        <img src="/imagePort/Capture d’écran 2025-09-01 154823.png" alt="" />
                    </div>

                </div>
                <div id="apropo">

                    <div className="apropo">
                        <div className="apropos">
                            <h3>A propos du projet</h3>
                            <p>page d'accueil Mi-produits est développée par React.Js,Typescripte,sass. <br />Elle a pour rôle de présenter l'ensemble des articles disponibles et permettre aux clients de parcourir,rechercher et acheter les produits locaux proposés par les vendeur</p>
                        </div>
                    </div>
                    <div className="apropo2">
                        <div className="tec1">
                            <h4>Détail du Projet</h4>
                            <div className="port1a1">
                                <div className="Role">
                                    <h6>Mon Role</h6>
                                    <h2>Développeur frontend </h2>
                                </div>
                                <div className="dure">
                                    <h6>Durée d'éxécution</h6>
                                    <h2>trois semaine</h2>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="tec">
                            <h4>Téchnologies Utiliseés</h4>
                            <div className="port1a">
                                <h5>React</h5>
                                <h5>Sass</h5>
                                <h5>Typescripte</h5>
                            </div>

                        </div>
                    </div>
                </div>
                <footer>
                    ©2025 Razafindrainibe Avotra Harilala Patrick. Tous droits réservés.
                </footer>
            </div>

        
        </>
    )
}
export default Port3