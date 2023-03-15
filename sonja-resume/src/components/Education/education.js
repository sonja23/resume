import React from 'react';
import data from '../../data/education';

const EduCard = (props) => {
    return (
        <div className='edu-card'>
            <h5 className='edu-degree'>{props.degree}</h5>
            <h7 className='edu-school'>{props.school}</h7>
            <p className='edu-program'>{props.program}</p>
            <p>{props.start} - {props.end}</p>
        </div>
    );

}
const cards = data.map(card => {
    return (
        <EduCard
            key={card.id}
            degree={card.degree}
            school={card.school}
            location={card.location}
            start={card.start}
            end={card.end}
            program={card.program}
        />
    )
})
const Education = () => {
    return (
        <div className='green-background'>
            <section className='color-section' id='education'>

                <div className='align-sub-title'><h3 className='sub-title-white'>Education</h3></div>

                <div className='align-text'>
                    {cards}
                </div>
            </section></div>

    )

};

export default Education;