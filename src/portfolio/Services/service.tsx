import { Link } from "react-scroll"
import "../../../public/assets/css/portfolio/Services/services.scss"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
const Service=()=>{
 const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0.2,
 });



    return(
        <>
            <div id="Container" ref={ref} >
                <h2>Mes Services</h2>
                <div className="Container">
                    <motion.div 
                        className="div_container"
                        initial ={{x:-200,opacity:0}}
                        animate={inView ? {x:0, opacity:1}:{}}
                        transition={{duration:2}} >
                        <div className="cotainer1a">
                            <img src="/imageSlide/logoRe/ico/animate_5084222.png" alt="" />
                            <h3>Web Développement Frontend Responsive</h3>
                        </div>
                        <div className="cotainer1">
                            <p className ="p">
                                 Création d’interfaces modernes, esthétiques et adaptées à tous les écrans (ordinateur, tablette, mobile). Intégration de maquettes, design UI/UX et utilisation de frameworks modernes (React,).
                            </p>
                           
                            <Link to="Contact" smooth={true} duration={500} className="button">Contactez-moi</Link>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="div_container"
                        initial={{y:200,opacity:0}}
                        animate={inView ? {y:0 , opacity:1}:{}}
                        transition={{duration:2}}
                    >
                        <div className="cotainer1a">
                            <img src="/imageSlide/logoRe/ico/coding_3867537.png" alt="" />
                            <h3>Web developpement Backend & API</h3>
                        </div>
                        <div className="cotainer1">
                            <p>
                                Conception et mise en place de la logique serveur : création d’API performantes, gestion de bases de données, authentification sécurisée et intégration de services externes 
                            </p>
                            <Link to="Contact" smooth={true} duration={500} className="button">Contactez-moi</Link>

                        </div>
                    </motion.div> 
                    <motion.div 
                        className="div_container"
                        initial={{x:200 ,opacity:0}}
                        animate={inView ? {x:0,opacity:1}:{}}
                        transition={{duration:2 }}
                    >
                        <div className="cotainer1a">
                            <img src="/imageSlide/logoRe/ico/layer_10329552.png" alt="" />
                            <h3>Web Développement Full Stack</h3>   
                        </div>
                        <div className="cotainer1">
                            <p>
                                Prise en charge complète du développement d’une application web, du frontend au backend. Déploiement, optimisation des performances et solutions sur mesure adaptées aux besoins des clients.
                            </p>
                            <Link to="Contact" smooth={true} duration={500}  className="button">Contactez-moi</Link>

                        </div>
                    </motion.div>
                </div>
            </div>
        
        
        </>
    )
}
export default Service