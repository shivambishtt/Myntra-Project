import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import FetchItems from '../components/FetchItems.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import { useSelector } from 'react-redux'

function App() {
  const loaderStatus = useSelector((state) => state.fetchStatus)

  return (
    <>
      <Header />
      <FetchItems />
      {loaderStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
