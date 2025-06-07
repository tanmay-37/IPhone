import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HighLights from "./components/HighLights.jsx";
import Model from "./components/Model.jsx";
import Features from "./components/Features.jsx";
const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <HighLights/>
            <Model/>
            <Features/>
        </main>
    )
}
export default App
