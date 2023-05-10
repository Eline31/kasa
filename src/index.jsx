import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Accomodation from './pages/Accomodation/Accomodation.jsx'
import ErrorAccomodation from './components/ErrorAccomodation/ErrorAccomodation.jsx'
import Error from './pages/Error/Error.jsx'
import Layout from './components/Layout.jsx'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home /></Layout>,
    },
    {
      path: '/',
      children: [
        {
          path: 'about',
          element: <Layout><About /></Layout>,
        },
        {
          path: 'accomodation/:id',
          element: <Layout><Accomodation /></Layout>,
          errorElement: <ErrorAccomodation />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ])

  return (<RouterProvider router={router} />)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
