import React from "react";
import Image from '../../assets/img/profile-picture.jpeg'

export default function CenterSection() {
    return (
        <section className="center-section">
            <div className="column">
                <img className="profile-picture" src={Image} alt='Profile' />
            </div>
            <div className="column">
                <h2 className="name">Sonja Malmström</h2>
                <div className="items-list">
                    <div>
                        <span class="material-symbols-outlined">
                            school
                        </span>
                        <p className="text">
                            Bachelor of Engineering, Information technology
                        </p>
                    </div>
                    <div>
                        <span class="material-symbols-rounded">
                            public
                        </span>
                        <p className="text">
                            Helsinki, Finland
                        </p>
                    </div>

                    <div>
                        <span class="material-symbols-rounded">
                            work
                        </span>
                        <p className="text">
                            Junior Engineer at Limber AS
                        </p>
                    </div>
                    <div>
                        <span class="material-symbols-rounded">
                            mail
                        </span>
                        <p className="text">
                            malmstromsonja@gmail.com
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}