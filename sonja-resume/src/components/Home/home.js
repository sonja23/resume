import React from "react";
import Image from '../../assets/img/picture.jpg';

function CenterSection() {
    return (
        <section className="center-section" id="home">
            <div className="column">
                <h2 className="name">Hi, I am <span className="highlight-name">Sonja</span></h2>
                <h4>I am a Junior Engineer</h4>
            </div>
            <div className="column--image">
                <img className="profile-picture" src={Image} alt='Profile' />
            </div>
        </section>
    )
}

export default function Home() {
    return (
            <CenterSection />
    )
}