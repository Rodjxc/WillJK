import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {Navbar} from "../../Components/Navbar/Navbar"
import {Home} from "../../Components/Home/Home";
import "./myroutes.css"

export const MyRoutes = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        {/*   HEADER AND NAVIGATION */}
        <div className="navbar">   
           <Navbar />
        </div>

        {/*   MAIN CONTENT */}
        <section className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}></Route>
             <Route path="/tattoo" element=""></Route>
            {/* <Route path="/servicios" element={<Servicios />}></Route> */}
            <Route path="/art" element=""></Route>
            {/* <Route path="/contact" element={<Contact />}></Route> */}
            <Route path="/project/:id" element=""></Route>
              
            <Route
              path="*"
              element={
                <div className="page">
                  <h2 className="heading">
                    Error 404. The content doesn't exist or couldn't be
                    displayed
                  </h2>
                </div>
              }
            ></Route>
          </Routes>
        </section>

        {/*   FOOTER  */}
      </BrowserRouter>
    </div>
  )
}
