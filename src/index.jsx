import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Accomodation from './pages/Accomodation/Accomodation.jsx'
import Error from './pages/Error/Error.jsx'
// import Header from './components/Layout/Header/Header.jsx'
// import Footer from './components/Layout/Footer/Footer.jsx'
import Layout from './components/Layout/Layout.jsx'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route
//           path="/accomodation/:id"
//           element={<Accomodation />}
//           errorElement={<Error />}
//         />
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <Footer />
//     </Router>
//   </React.StrictMode>
// )

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: '/',
      children: [
        {
          path: 'about',
          element: (
            <Layout>
              <About />
            </Layout>
          ),
        },
        {
          path: 'accomodation/:id',
          element: (
            <Layout>
              <Accomodation />
            </Layout>
          ),
          errorElement: <Error />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ])
  return <RouterProvider router={router} />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
