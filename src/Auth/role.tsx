import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { jwtDecode } from "jwt-decode"
import { FieldValues, useForm } from "react-hook-form"
import { useEffect } from "react"
import {useNavigate } from "react-router-dom"
import { setCleanRoles } from "../redux/slice/roleSlice"
import { toast } from "react-toastify"
import { createRole, findAllRole } from "../redux/asyncThunk/rolesThunk"



const Role = () =>{
    const dispatch = useDispatch<AppDispatch>()
    const roleState= useSelector((state:RootState) => state.roleStore)
    const {addRole} = roleState


    const navigate = useNavigate()
    const token = localStorage.getItem("_auth")
    const userData = token && jwtDecode<userData | null>(token)
    const user = userData as userData

    const {register, handleSubmit,watch, formState: {errors}} = useForm()

    const role = watch("role")
    const inputVide = !role 
    // console.log(role);
    

    const onSubmit = (data:FieldValues)=>{
        const formData = new FormData()
        formData.append("roles" , data.roles)
        formData.append("personne", `${user.person?.id}`)

        dispatch(createRole(formData))
    }

    useEffect(()=>{
        if(addRole.create_ok){

            navigate("/Admin")
            toast.success("Vous êtes authentifié en tant que " );
        }
        return ()=>{
            dispatch(findAllRole())
            dispatch(setCleanRoles())
        }
    },[addRole.create_ok])
    

    return(
        <>
            <div>
                <h1>{user.username}</h1>
            </div>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="role"> selectionner votre role</label><br />
                <input type="text" id="role" placeholder="Entrer votre role" {...register("roles")}/>
                {/* <button disabled={inputVide}>se connecter</button> */}
                <button disabled={addRole.active}>{addRole.active ? "Ajout en cours..." : "Ajouter"}
                </button>
            </form>
        </>
    )
}
export default Role