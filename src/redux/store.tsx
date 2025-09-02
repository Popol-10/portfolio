import { configureStore } from "@reduxjs/toolkit";
import { ArticleSlice } from "./slice/articleSlice";
import { ModalSlice } from "./slice/modalSlice";
import { AuthSlice } from "./slice/authSlice";
import { CategorieSlice } from "./slice/categorieSlice";
import { CommandeSlice } from "./slice/commandeSlice";
import { ClientSlice } from "./slice/clientSlice";
import { PersonSlice } from "./slice/personSlice";
import { BoutiqueSlice } from "./slice/boutiqueSlice";
import { RoleSlice } from "./slice/roleSlice";
import { SearchSlice } from "./slice/searchSlice";

export const storeRedux = configureStore({
    reducer:{
        articleStore: ArticleSlice.reducer,
        modalStore: ModalSlice.reducer,
        authStore: AuthSlice.reducer,
        categorieStore: CategorieSlice.reducer,
        commandeStore: CommandeSlice.reducer,
        clientStore: ClientSlice.reducer,
        personStore: PersonSlice.reducer,
        boutiqueStore: BoutiqueSlice.reducer,
        roleStore: RoleSlice.reducer,
        searchStore: SearchSlice.reducer
    }
})

export type RootState = ReturnType<typeof storeRedux.getState>
export type AppDispatch = typeof storeRedux.dispatch

//Action
//typeof useSelector
//sotre
//dispatch