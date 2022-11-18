import React, {useCallback} from 'react';
import './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import style from "./App.module.css";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <div className={style.app}>
            <Header/>
            <Particles className={style.particles}
                       init={particlesInit}
                       loaded={particlesLoaded}
                       options={{
                           fpsLimit: 120,
                           interactivity: {
                               events: {
                                   onClick: {
                                       enable: true,
                                       mode: "push",
                                   },
                                   onHover: {
                                       enable: true,
                                       mode: "repulse",
                                   },
                                   resize: true,
                               },
                               modes: {
                                   push: {
                                       quantity: 6,
                                   },
                                   repulse: {
                                       distance: 200,
                                       duration: 0.4,
                                   },
                               },
                           },
                           particles: {
                               color: {
                                   value: "#ffffff",
                               },
                               links: {
                                   color: "#ffffff",
                                   distance: 100,
                                   enable: true,
                                   opacity: 0.6,
                                   width: 1,
                               },
                               collisions: {
                                   enable: true,
                               },
                               move: {
                                   direction: "none",
                                   enable: true,
                                   outModes: {
                                       default: "bounce",
                                   },
                                   random: true,
                                   speed: 2,
                                   straight: false,
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       area: 800,
                                   },
                                   value: 80,
                               },
                               opacity: {
                                   value: 0.5,
                               },
                               shape: {
                                   type: "circle",
                               },
                               size: {
                                   value: { min: 1, max: 5 },
                               },
                           },
                           detectRetina: true,
                       }}
            />
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
