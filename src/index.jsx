import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Accomodation from './pages/Accomodation/Accomodation.jsx'
import ErrorAccomodation from './components/ErrorAccomodation/ErrorAccomodation.jsx'
import Error from './pages/Error/Error.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<ErrorAccomodation />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/accomodation/:id"
          element={<Accomodation />}
          errorElement={<ErrorAccomodation />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
