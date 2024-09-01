import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
function Bag() {
    return (
        <>
            <Header />
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                    </div>
                    <div className="bag-summary">
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Bag
