import { useRef } from "react"
import "../../../public/assets/css/portfolio/Contact/contact.scss" 
import emailjs from "emailjs-com"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"


const Contact =()=>{

    const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0.2,
 });

    const form = useRef<HTMLFormElement>(null)
     const sendEmail = (e:React.FormEvent)=>{
        e.preventDefault();
     }

     if(form.current){
        emailjs
        .sendForm(
            "service_komdhrq",
            "template_5kwfij8",
            form.current,
            "d4Hsk7e-OyehelF8f"
        )
        .then(
            (result)=>{
                console.log("Message envoyé ! ", result.text);
            }
        ),
        (error:any)=>{
            console.error("Erreur:", error.text)
        }
     }





    return(
        <>
            <section id="Contact" ref={ref}>
                <div className="contactd">
                    <h2>Contact moi</h2>
                    <div id="contactd2">
                        <motion.div 
                            className="contactd2"
                            initial = {{x:-100,opacity:0}}
                            animate={inView ? {x:0, opacity:1}:{}}
                            transition={{duration:2}}
                        >
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" placeholder="Votre nom" name="name" required/>
                                <input type="email" placeholder="Votre email" name="email" required/>
                                <textarea name="message" id=""  placeholder="Ecrire votre message" required/>
                                <button type="submit">Envoyer</button>
                            </form>
                        </motion.div>
                        <motion.div 
                            className="contactd2"
                            initial = {{x:100,opacity:0}}
                            animate={inView ? {x:0, opacity:1}:{}}
                            transition={{duration:2}}>
                            <div className="contlogo">
                                <div className="phone">
                                    <div className="phone2">
                                        <img src="../../../public/imageSlide/logoPhone/phone-call.png" alt="" />
                                    </div>
                                    <div className="mail">
                                        <h5>034 89 709 47</h5>  

                                    </div>
                                </div>
                                <div className="phone">
                                    <div className="phone2">
                                        <img src="../../../public/imageSlide/logoPhone/email.png" alt="" />

                                    </div>
                                    <div className="mail">
                                        <h5>patrickmiavotra@gmail.com</h5>  

                                    </div>
                                </div>
                                <a 
                                    href="https://wa.me/261348970947" 
                                    className="phone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none"}}>
                                    <div className="phone2">
                                        <img src="../../../public/imageSlide/logoPhone/whatsapp.png" alt="" />

                                    </div>
                                    <div className="mail">
                                        <h5>+261 34 89 709 47</h5>  

                                    </div>
                                </a>
                                <a  
                                    href="https://www.facebook.com/offre.demploi.982" 
                                    className="phone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none"}}>

                                    <div className="phone2">
                                        <img src="../../../public/imageSlide/logoPhone/facebook.png" alt="" />
                                    </div>
                                    <div className="mail">
                                        <h5>Patrick Razafindrainibe</h5>  

                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                
            </section>
        </>
    )
}
export default Contact