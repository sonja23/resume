import React from 'react';
import { codeSkills } from '../../data/skills';

function ListSkills(props) {
    return (
        <div className='align-text'>
            <p className='skill-badge'>{props.name}</p>
        </div>
    );
}
const code = codeSkills.map(x => {
    return (
        <ListSkills name={x} />
    )
})

const Skills = () => {
    return (
        <section className='default-section'>
            <div className='align-title-left'><h3 className='sub-title-green'>Skills</h3></div>
            <div className='align-item'>{code}</div>

        </section>
    );
};

export default Skills;