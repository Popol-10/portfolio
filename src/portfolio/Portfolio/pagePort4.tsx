import { Link } from "react-router-dom"
import "../../../public/assets/css/portfolio/Portfolio/port1.scss"
// import "../../../imagePort/Capture d’écran 2025-09-01 145041.png"
// import Header from "../header/header"
import Header2 from "../header/head2"
const Port4=()=>{

    return(
        <>
        <Header2/>
            <div id="detailPort">
                <div className="detailPort">
                    <div className="text1">
                        <Link to={"/"}>sortir</Link>
                        <h2>Maquette automobile</h2>
                        <p>j'ai réalisé l'intégration web d'une maquette automobile en transformat un designe statique en un site fonctionnel et interactif.</p>
                    </div>
                    <div className="img">
                        <img src="../../../imagePort/Capture d’écran 2025-09-01 150243.png" alt="" />
                    </div>
                </div>
                <div id="apropo">
                    <div className="apropo">
                        <div className="apropos">
                            <h3>A propos du projet</h3>
                            <p>Le projet consiste à mettre en place une interface moderne et responsive, s'adaptant parfaitement aux différents supports(ordinateur,Tablette et mobile).j'ai intégré des animations fluides pour dynamiser l'expérience utilisateur, notamment lors du défilement et des interactions avec les éléments visuels.ce travaille m'a permis de mettre en pratique mes compétence en HTML,CSS, Javascript,ainsi que mes connaissances en responsive design et en animation web</p>
                        </div>
                        
                    </div> 
                    <div className="apropo2">
                        <div className="tec1">
                            <h4>Détail du Projet</h4>
                            <div className="port1a1">
                                <div className="Role">
                                    <h6>Mon Rôle</h6>
                                    <h2>Intégrateur Web</h2>
                                </div>
                                <div className="dure">
                                    <h6>Durée d'éxécution</h6>
                                    <h2>une semaine et quatre jour</ h2>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="tec">
                            <h4>Téchnologies Utiliseés</h4>
                            <div className="port1a">
                                <h5>Html</h5>
                                <h5>Css</h5>
                                <h5>Javascript</h5>
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
export default Port4