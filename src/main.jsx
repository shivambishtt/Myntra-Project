import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Bag from './components/Bag.jsx'
import Home from './routes/Home.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux"
import store from './store/Store.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: '/bag', element: <Bag />
      },
    ]
  }])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </ Provider >
  </React.StrictMode>
)
