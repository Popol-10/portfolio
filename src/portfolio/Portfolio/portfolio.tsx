import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import "../../../public/assets/css/portfolio/Portfolio/portfolio.scss"
// import "../../../imagePort/Capture d’écran 2025-09-01 150243.png"
import { useInView } from "react-intersection-observer";

const Portfolio =()=>{
const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0.2,
 });
    return(
        <>
            <section id="portfolio" ref={ref}>
                <h2>Portfolio</h2>
                <div className="portfolio1">
                    <motion.div 
                        className="port1"
                        initial = {{x:-100,y:50,opacity:0}}
                        animate={inView ? {x:0, y:0, opacity:1}:{}}
                        transition={{duration:2}}
                        >
                        <img src="/imagePort/Capture d’écran 2025-09-02 081543.png" alt="" />
                        <h3>Portfolio</h3>
                        <p>Une application web qui contient touts mes information : experiences, competence...</p>
                        <div className="port1a">
                            <h4>React.js</h4>
                            <h4>Sass</h4> 
                            <h4>Typescript</h4>
                        </div>
                        <Link to={"/port1"} className="button"> Voir le detail <img src="/imageSlide/right_13472507.png" alt="" /></Link>
                    </motion.div>
                    <motion.div 
                        className="port1"
                        initial = {{x:100,y:50,opacity:0}}
                        animate={inView ? {x:0,y:0, opacity:1}:{}}
                        transition={{duration:2}}>
                        <img src="/imagePort/Capture d’écran 2025-09-01 152056.png" alt="" />
                        <h3>Mi-Produits</h3>
                        <p>Une plateforme dédiée à la valorisation et à la vente de produits locaux à Madagasikara</p>
                        <div className="port1a">
                            <h4>React.js</h4>
                            <h4>Typescript</h4>
                            <h4>Sass</h4>
                            <h4>Nest.js</h4>
                            <h4>Mysql</h4>
                            <h4>Swagger</h4>
                        </div>
                        <Link to={"/port2"} className="button"> Voir le detail <img src="/imageSlide/right_13472507.png" alt="" /></Link>
                    </motion.div>
                </div>
                <div className="portfolio1">
                    
                    <motion.div 
                        className="port1"
                        initial = {{x:-100,y:-50,opacity:0}}
                        animate={inView ? {x:0,y:0, opacity:1}:{}}
                        transition={{duration:2}}>
                        <img src="/imagePort/Capture d’écran 2025-09-01 154823.png" alt="" />
                        <h3>Page d'accueil Mi-Produits</h3>
                        <p>C'est la vitrine principale du site Mi-Produits.</p>
                        <div className="port1a">
                            <h4>React.js</h4>
                            <h4>Sass</h4>
                            <h4>Typescript</h4>
                        </div>
                        <Link to={"/port3"} className="button"> Voir le detail <img src="/imageSlide/right_13472507.png" alt="" /></Link>
                    </motion.div>
                    <motion.div 
                        className="port1"
                        initial = {{x:100,y:-50,opacity:0}}
                        animate={inView ? {x:0,y:0, opacity:1}:{}}
                        transition={{duration:2}}>
                        <img src="/imagePort/Capture d’écran 2025-09-01 150243.png" alt="" />
                        <h3>Maquette automobile</h3>
                        <p>j'ai réalisé l'intégration web d'une maquette automobile en transformat un designe statique en un site fonctionnel et interactif.</p>
                        <div className="port1a">
                            <h4>javaScript</h4>
                            <h4>Html</h4>
                            <h4>Css</h4>
                        </div>
                        <Link to={"/port4"} className="button"> Voir le detail <img src="/imageSlide/right_13472507.png" alt="" /></Link>
                    </motion.div>
                </div>bn 
            </section>
        
        
        </>
    )
}
export default Portfolio