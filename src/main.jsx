import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Home } from './components/Home.jsx'
import Contact from './components/contact.jsx'
import Dashboard from './components/dashboard.jsx'
import About from './components/about.jsx'
import Github from './components/Github.jsx'
// Define the routes
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      children:[
        {
          path:"",
          element:<Home/>,
        },
        {
          path:"contact",
          element:<Contact/>,
        },
        {
          path:"dashboard",
          element:<Dashboard/>,
        },
        {
            path:"about",
            element:<About/>,
        },
        {
          path:"github",
          element:<Github/>,
      },
      ]
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)