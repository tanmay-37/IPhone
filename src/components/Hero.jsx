import React, {useEffect, useState} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {heroVideo, smallHeroVideo} from "../utils/index.js";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcChange = () => {
        if(window.innerWidth < 760)
            setVideoSrc(smallHeroVideo)
        else
            setVideoSrc(heroVideo)
    }

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrcChange);
        return () => {
            window.removeEventListener("resize", handleVideoSrcChange);
        }
    },[])
    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2
        }),
            gsap.to('#cta', {
                opacity: 1,
                y: -50,
                delay: 2
            })
    }, [])
    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 flex-center flex-col'>
                <p id='hero' className='hero-title'>iPhone 15 Pro</p>
                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div id='cta' className='flex flex-col items-center opacity-0'>
                <a href="#highlights" className='btn'>Buy</a>
                <p>From $199/month or $999</p>
            </div>
        </section>
    )
}
export default Hero
