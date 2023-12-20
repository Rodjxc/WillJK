import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {Navbar} from "../../Components/Navbar/Navbar"

export const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        {/*   HEADER AND NAVIGATION */}
      <Navbar />

        {/*   MAIN CONTENT */}
        <section className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            {/* <Route path="/servicios" element={<Servicios />}></Route> */}
            <Route path="/CV" element={<CV />}></Route>
            {/* <Route path="/contact" element={<Contact />}></Route> */}
            <Route path="/project/:id" element={<Project />}></Route>

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
        <Footer />
      </BrowserRouter>
    </div>
  )
}

