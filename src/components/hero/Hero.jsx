import React from "react"
import "./hero.css"
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from "../Assests/arrow.png"
// import hero_image from '../Assests/hero_image.png'
// import fahim3 from '../Assests/fahim3.png.jpeg'
import fahim5 from'../Assests/fahim5-removebg-preview.png'
const Hero=()=>
{

    return(
        <div className="hero">
            <div className="hero-left">
                <h2 style={{height:"50px"}}>NEW ARRIVAL ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>NEW</p>
                        <img src={hand_icon} alt="" />

                    </div>
                    <p>Collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>

            </div>
            <div className="hero-right">
                {/* <img style={{height:"600px"}} src={hero_image} alt="" />//paste img  */}
                <img  style={{height:"500px"}} src={fahim5} alt="" />
            </div>
             
        </div>
    )
}
export default Hero