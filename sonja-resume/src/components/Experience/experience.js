import React from 'react';
import data from '../../data/experience'

const ExperienceCard = (props) => {
    return (
        <div className='work-card'>
            <h5 className='work-position'>{props.position}</h5>
            <h7 className='work-company'>{props.company}</h7>
            <p>{props.start} - {props.end}</p>
        </div>
    )
}

const cards = data.map(card => {
    return (
        <ExperienceCard
            key={card.id}
            position={card.position}
            company={card.company}
            start={card.start}
            end={card.end} />
    )
})
const Experience = () => {
    return (
        <section className='default-section'>
            <div className='align-title-left'><h3 className='sub-title-green'>Experience</h3></div>
            <div className='align-text'>
                {cards}
            </div>
        </section>
    );
};

export default Experience;