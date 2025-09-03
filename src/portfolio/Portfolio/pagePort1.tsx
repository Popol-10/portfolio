import { Link } from "react-router-dom"
import "../../assets/css/portfolio/Portfolio/port1.scss"
// import Header from "../header/header"
import Header2 from "../header/head2"
import {motion} from "framer-motion"
const Port1=()=>{


    return(
        <>
        <Header2/>
            <div id="detailPort">
                <div className="detailPort">
                    <motion.div 
                        className="text1"
                        initial={{y:-100,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:2}}
                        >
                        <Link to={"/"} > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                            </svg>
                        </Link>
                        <h2>Portfolio</h2>
                        <p>Une application web qui contient touts mes travails, mes parcours, mes information(expériences, compétence...)</p>
                    </motion.div>
                    <div className="img">
                        <img src="/imagePort/Capture d’écran 2025-09-02 081543.png" alt="" />
                    </div>
                </div>
                <div id="apropo">
                    <div className="apropo">
                        <div className="apropos">
                            <h3>A propos du projet</h3>
                            <p>A travers ce portfolio, je partage mes projets , mon savoir-faire et ma passion du développement. <br />
                            chaque projet que vous decouvrirez ici reflète mon engagement, ma rigueur et mon envie de créer des solution unique
                            <br />
                            ce portfolio est développé par React.js et Typescript , Sass pour styliser et dynamiser le site.</p>
                        </div>
                    </div> 
                    <div className="apropo2">
                        <div className="tec1">
                            <h4>Détail du Projet</h4>
                            <div className="port1a1">
                                <div className="Role">
                                    <h6>Mon Role</h6>
                                    <h2>Dévéloppeur frontend </h2>
                                </div>
                                <div className="dure">
                                    <h6>Durée d'éxécution</h6>
                                    <h2>deux semaine</h2>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="tec">
                            <h4>Téchnologies Utiliseés</h4>
                            <div className="port1a">
                                <h5>React.js</h5>
                                <h5>Sass</h5>
                                <h5>typescript</h5>
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
export default Port1