import "../../public/assets/css/auth/login.scss"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { useSelector } from "react-redux"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, useForm } from "react-hook-form"
import { ApiLogin, ApiRegister } from "../redux/asyncThunk/authThunk"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { setCleanAuth } from "../redux/slice/authSlice"
import EmailIcone from "../assets/icon/email"
import PasswordIcon from "../assets/icon/passwordIcon"
import { setCleanRoles } from "../redux/slice/roleSlice"

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()
    const authState= useSelector((state:RootState) => state.authStore)
    const roleState = useSelector((state:RootState) => state.roleStore)
    const {token, error} = authState

    const signIn = useSignIn()
    const navigate = useNavigate()

    const schema = yup.object({
        email: yup.string().required("le champs email est requis"),
        password: yup.string().required("le champs mot de passe est requis")
        .min(6, "Le mot de passe doit etre contenir 6 caractères"),
    })

    const {register, setError, clearErrors, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FieldValues) => {
        const formData = new FormData()
        formData.append("email", data.email)
        formData.append("password", data.password)
        dispatch(ApiLogin(formData))
    }

    useEffect(() => {
        if(error.status){
            const value = error.value 
            const valTab = value?.split("/");
            
            if(valTab?.length && valTab[0] == "email"){
                setError("email", {message: "Adresse email incorrect"})
            }else if(valTab?.length && valTab[0] == "password"){
                setError("password", {message: "Mot de passe incorrect"})
            }
            else{
                clearErrors();
            }
        }

        return () => {
            dispatch(setCleanAuth())
        }
    },[error.status])


  useEffect(() => {
    if (token.status || authState.login?.data.role) {
        const { value: tkn } = token;
        const roles = authState.login?.data.role

        // Enregistrer le token dans react-auth-kit
        signIn({
                auth: {token: tkn}
            })
        // Redirection selon le rôle
        if (roles == "Admin") {
            navigate("/Admin");
        } else {
            navigate("/user");
        }
        
        toast.success(`Vous êtes authentifié en tant que ${roles}`);
        
    }
        return()=>{
            dispatch(setCleanAuth());
            dispatch(setCleanRoles());
        }
    
}, [token.status || authState.login?.data.role]);

    

    return (
        <>
            <section id="pageLogin">
                <div id="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div id="content-head">
                            <h4 id="titre">Connexion</h4>
                        </div>
                        <div id="content-group">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <div id="content-input">
                                    <div id="content-icon">
                                        <EmailIcone />
                                    </div>
                                    <input type="email" placeholder="adresse email" {...register("email")} />
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
                                    <input type="password" placeholder="mot de passe" {...register("password")} />
                                </div>
                                {
                                    errors.password && (
                                        <small className="error">{errors.password.message}</small>
                                    )
                                }
                            </div>
                        </div>
                        <div id="action">
                            <button id="btnAction">Se connecter</button>
                        </div>
                    </form>
                    <div id="signup">
                        <span id="txt">Vous n'avez pas un compte?</span>
                        <Link to={"/register"} id="link">Cliquer ici</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login