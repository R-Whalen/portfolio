import { Employment, Skill } from '@/types';
import React, { Fragment } from 'react'
import EmploymentItem from './Employment';
import SkillItem from './Skill';

import SkillsData from '../../public/data/skills.json';
import EmploymentHistory from '../../public/data/employment.json' assert { type: "json" };

const Skills = () => {
    return (
        <div className='pt-16 md:pt-32 pb-20 bg-[#09101a]'>
            <h1 className='heading'>Education & <span className='text-yellow-400'>Skills</span></h1>
            <div className='w-[80%] mx-auto pt-16 md:pt-42 grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
                {EmploymentHistory.map((employment: Employment, index: number) => <Fragment key={index}>
                    <EmploymentItem {...employment} />
                </Fragment>)}
                {SkillsData.map((skill: Skill) =>
                    <Fragment key={skill.name}>
                        <SkillItem {...skill} />
                    </Fragment>)}
            </div>
        </div>
    )
}

export default Skills;