import { Link } from "react-router-dom"
import "../../assets/css/portfolio/Portfolio/port1.scss"
// import Header from "../header/header"
import Header2 from "../header/head2"
const Port2=()=>{

 
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
                        <h2>Mi-Produits</h2>
                        <p>Une plateforme dédiée à la valorisation et à la vente de produits locaux à Madagasikara</p>
                    </div>
                    <div className="img">
                        <img src="/imagePort/Capture d’écran 2025-09-01 152056.png" alt="" />
                    </div>

                </div>
                <div id="apropo">

                    <div className="apropo">
                        <div className="apropos">
                            <h3>A propos du projet</h3>
                            <p>Mi-Produits est une solution complète de vente et des achats,développée par React.JS et TypeScript pour le frontend et Sass pour le style, côté backend j'utilise NestJs , Mysql pour la base de donnée et j'utilise aussi l'API Swagger. <br/>
                            ce site permet aux vendeur de publier facilement leurs articles, qu'il s'agisse de produits agricoles,artisanaux,  ou autres richesse locales. Les Client peuvents parcourir les offres, passer des commandes ou faire des réservation en toute simplicité.</p>  
                        </div>
                        <div className="fonctionalite">
                            <h3>Fonctionalité</h3>
                            <p>
                                <span>*</span> Gestion des produits et des personnels (CRUD complet)
                            </p>
                            <p>
                                <span>*</span> Authentification sécurisée avec rôles (Admin,vendeur,Client)

                            </p>
                            <p>
                                <span>*</span> suivi en temps réel des contributions

                            </p>
                            <p>
                                <span>*</span> deux (2) Tableau de bord pour Admin et Vendeur et une page d'accueil pour la présentation du site

                            </p>
                            <p>
                                <span>*</span> Design responsive et optimisé SEO
                            </p>
                            
                        </div>
                    </div> 
                    <div className="apropo2">
                        <div className="tec1">
                            <h4>Détail du Projet</h4>
                            <div className="port1a1">
                                <div className="Role">
                                    <h6>Mon Rôle</h6>
                                    <h2>Développeur full stack</h2>
                                </div>
                                <div className="dure">
                                    <h6>Durée d'éxécution</h6>
                                    <h2>6mois</h2>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="tec">
                            <h4>Téchnologies Utiliseés</h4>
                            <div className="port1a">
                                <h5>React.js</h5>
                                <h5>Typescript</h5>
                                <h5>Sass</h5>
                                <h5>Nest.js</h5>
                                <h5>node.js</h5>
                                <h5>Mysql</h5>
                                <h5>Swagger</h5>
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
export default Port2