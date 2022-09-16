import React, { useState, useEffect } from "react"
// import Routes from './Routes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader"
import ScrollToTop from "./components/ScrollToTop"
import useToggle from "./Hooks/useToggle"
import Drawer from "./components/Drawer"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Career from "./components/pages/joinus/career"
import Store from "./components/pages/joinus/store"
import LoanCenter from "./components/pages/joinus/loan"
import HeadOffice from "./components/pages/joinus/headoffice"

import { ReactNotifications } from "react-notifications-component"
import "react-notifications-component/dist/theme.css"

function App() {
  const [loading, setLoading] = useState(true)
  const [drawer, drawerAction] = useToggle(false)
  const [width, setWinWidth] = useState(0)

  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  const updateDimensions = () => {
    const width = window.innerWidth
    setWinWidth(width)
  }

  return (
    <React.Fragment>
      {loading && (
        <div className={`cash-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}

      <div className={`cash-visible ${!loading ? "active" : ""}`}>
        <ReactNotifications />
        <Router basename="/">
          <ScrollToTop>
            <Drawer drawer={drawer} action={drawerAction.toggle}></Drawer>
            <Header action={drawerAction.toggle} width={width} />
            <Routes>
              <Route exact path="/" element={<Career width={width} />} />
              <Route path="/joinus" element={<Career width={width} />} />
              <Route path="/joinus/career" element={<Career width={width} />} />
              <Route path="/joinus/store" element={<Store width={width} />} />
              <Route
                path="/joinus/loancenter"
                element={<LoanCenter width={width} />}
              />
              <Route
                path="/joinus/headoffice"
                element={<HeadOffice width={width} />}
              />
            </Routes>
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    </React.Fragment>
  )
}

export default App
