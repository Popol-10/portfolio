import React from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Route, Routes } from 'react-router-dom'
import AuthProvider from "react-auth-kit/AuthProvider"
import createStore from 'react-auth-kit/createStore'

import { PrivateRoute } from './routes/privateRoute'
import Header from './portfolio/header/header'
import Ensemble from './portfolio/Ensemble/ensemble'
import Port1 from './portfolio/Portfolio/pagePort1'
import Port2 from './portfolio/Portfolio/pagePort2'
import Port3 from './portfolio/Portfolio/pagePort3'
import Port4 from './portfolio/Portfolio/pagePort4'




function App() {
  const storeAuth = createStore({
    authName: "_auth",
    authType: "localstorage"
  })

  return (
    <>
      <AuthProvider store={storeAuth}>
        <ToastContainer />
        <Routes>
          <Route element={<PrivateRoute />}>
          {/* <Route path="/Header" element={<Header/>}/> */}
          <Route path="/portfolio" element={<Ensemble/>}/>
          <Route path="/" element={<Ensemble/>}/>
          <Route path="/port1" element={<Port1/>}/>
          <Route path="/port2" element={<Port2/>}/>
          <Route path="/port3" element={<Port3/>}/>
          <Route path="/port4" element={<Port4/>}/>

          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
