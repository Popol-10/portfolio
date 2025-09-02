import "../../public/assets/css/auth/register.scss"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { useSelector } from "react-redux"
import { FieldValues, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ApiRegister } from "../redux/asyncThunk/authThunk"
import { useEffect } from "react"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { Link, useNavigate } from "react-router-dom"
import { setCleanAuth } from "../redux/slice/authSlice"
import { toast } from "react-toastify"
import EmailIcone from "../assets/icon/email"
import PasswordIcon from "../assets/icon/passwordIcon"
import UserIcone from "../assets/icon/userIcone"
import { RoleSlice, setCleanRoles } from "../redux/slice/roleSlice"

const Register = () => {
    const dispatch = useDispatch<AppDispatch>()
    const authState= useSelector((state:RootState) => state.authStore)
    const {token} = authState

    const signIn = useSignIn()
    const navigate = useNavigate()

    const schema = yup.object({
        nom: yup.string().required("le champs nom est requis"),
        prenom: yup.string().required("le champs prenom est requis"),
        email: yup.string().required("le champs email est requis"),
        password: yup.string().required("le champs mot de passe est requis")
        .min(6, {message: "Le mot de passe doit etre contenir 6 caractères"}),
         passwordConfirm: yup.string()
        .oneOf([yup.ref('password')], "Les mots de passe ne correspondent pas")
        .required("La confirmation du mot de passe est requise"),
        roles: yup.string()
        .oneOf(['user', 'Admin'], "Rôle invalide (doit être 'user' ou 'Admin')")
        .required("Le rôle est requis")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FieldValues) =>{
        const formData = new FormData()

        formData.append("nom", data.nom)
        formData.append("username", data.nom)
        formData.append("prenom", data.prenom)
        formData.append("email", data.email)
        formData.append("password", data.password)
        formData.append("passwordConfirm", data.passwordConfirm)
        formData.append("roles",data.roles)
        dispatch(ApiRegister(formData))
    }

 useEffect(() => {
        if(token.status){
            const {value: tkn} = token
            const roles = authState.singUp.data.role

            signIn({
                auth: {token: tkn}
            })
            if(roles==="Admin"){
                navigate("/Admin")
            }
            else {navigate("/user")}

            toast.success("Vous êtes authentifié autant qu' " + roles)
        }
        return () => {
            dispatch(setCleanAuth())
        }
        
        
    }, [token.status])
    console.log(authState.singUp.data);


    return (
        <>
            <section id="pageRegister">
                <div id="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div id="content-head">
                            <h4 id="titre">Inscription</h4>
                        </div>
                        <div id="content-group">
                            <div className="form-group">
                                <label htmlFor="">Nom</label>
                                <div id="content-input">
                                    <div id="content-icon">
                                        <UserIcone />
                                    </div>
                                    <input type="text" placeholder="votre nom" {...register("nom")} />
                                </div>
                                {
                                    errors.nom && (
                                        <small className="error">{errors.nom.message}</small>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Prénom</label>
                                <div id="content-input">
                                    <div id="content-icon">
                                        <UserIcone />
                                    </div>
                                    <input type="text" placeholder="votre prenom" {...register("prenom")} />
                                </div>
                                {
                                    errors.prenom && (
                                        <small className="error">{errors.prenom.message}</small>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <div id="content-input">
                                    <div id="content-icon">
                                        <EmailIcone />
                                    </div>
                                    <input type="email" placeholder="Adresse email" {...register("email")} />
                                </div>
                                {
                                    errors.email && (
                                        <small className="error">{errors.email.message}</small>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mot de passe</label>
                                <div id="content-input">
                                    <div id="content-icon">
                                        <PasswordIcon />
                                    </div>
                                    <input type="password" placeholder="votre mot de passe" {...register("password")} />
                                </div>
                                {
                                    errors.password && (
                                        <small className="error">{errors.password.message}</small>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Confirmation mot de passe</label>
                                <div id="content-input">
                                    <div id="content-icon">
                                        <PasswordIcon />
                                    </div>
                                    <input type="password" placeholder="votre mot de passe" {...register("passwordConfirm")} />
                                </div>
                                {
                                    errors.passwordConfirm && (
                                        <small className="error">{errors.passwordConfirm.message}</small>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Roles</label>
                                <div id="content-input">
                                <select {...register("roles")} style={{fontSize:"1.2vw",border:"none"}} className="select">
                                    <option value="Admin">Admin</option>
                                    <option value="user">user</option>
                                </select>
                                </div>
                                {
                                    errors.roles && (
                                        <small className="error">{errors.roles?.message}</small>
                                    )
                                }
                            </div>
                        </div>
                        <div id="action">
                            <button id="btnAction">S'inscrire</button>
                        </div>
                    </form>
                    <div id="signup">
                        <span id="txt">Vous avez déjà un compte?</span>
                        <Link to={"/login"} id="link">Cliquer ici</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register

