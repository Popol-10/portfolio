import { useInView } from "react-intersection-observer";
// import "assets/css/portfolio/Section2/section2.scss";
import "../../assets/css/portfolio/Section2/section2.scss";
import {motion} from "framer-motion"
// import "../../../public/imageSlide/logoCompet/html-5_5968267.png"

const Section2 =()=>{
 const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0.2,
 });



    return(
        <>
            <section id="section2" ref={ref}>
                <h2>MES COMPETENCES</h2>
                <motion.div 
                    id="contenaire-Compet"
                    initial={{y:100,opacity:0}}
                    animate={inView ? {y:0 , opacity:1} : {}}
                    transition={{duration:3}}
                    >
                    <div className="boiteComp">
                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/html-icon-3d-rendering-illustration-vector.jpg" alt="" className="html" />    
                                <h3>HTML</h3>
                            </div>
                        </div >

                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/css21.png" alt="" />
                                <h3>CSS</h3>
                            </div>
                        </div>
                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/js_5968292.png" alt="" />
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/sass_919831.png" alt="" />
                                <h3>Sass/Scss</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className="boiteComp">
                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/459_bootstrap.webp" alt="" className="bootstrap"/>
                                <h3>Bootstrap</h3>
                            </div>
                        </div >

                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/typescript_5968381.png" alt="" />
                                <h3>Typescript</h3>
                            </div>
                        </div>

                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/react.png" alt="" />
                                <h3>ReactJs</h3>
                            </div>
                        </div>

                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoRe/logo Php1.png" alt="" />
                                <h3>PHP</h3>
                            </div>
                        </div >

                        
                        
                    </div>
                    <div className="boiteComp">
                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/nestJs.png" alt="" className="nest"/>
                                <h3>NestJs</h3>
                            </div>
                        </div>
                        <div className="imagIco">
                            <div className="div" >
                                <img src="/imageSlide/logoCompet/nodejs.jpg" alt="" className="nodJs"/>
                                <h3>NodeJs</h3>
                            </div>
                        </div>

                        <div className="imagIco">
                            <div className="div">
                                <img src="/imageSlide/logoCompet/mysql.webp" alt="" className="mysql" />
                                <h3 style={{marginTop:".5vw"}}>Mysql</h3>
                            </div>
                        </div>
                        <div className="imagIco">
                            {/* <br /> */}
                            <div className="div" style={{paddingTop:"0.2vw",marginTop:"1vw"}}>
                                <img src="/imageSlide/logoCompet/swagger-banner.png" alt=""  className="swagger"/>
                                <h3>Swagger</h3>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
            </section>

        </>
    )
}
export default Section2