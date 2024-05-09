import { Employment, Skill } from '@/types';
import React, { Fragment } from 'react'
import EmploymentItem from './Employment';
import SkillItem from './Skill';

import SkillsData from '../../public/data/skills.json';
import EmploymentHistory from '../../public/data/employment.json' assert { type: "json" };

const Skills = () => {
    const indexOfSwitch = 5;

    const coreCompetencies = SkillsData.slice(0, indexOfSwitch);
    const otherTechnologies = SkillsData.slice(indexOfSwitch, SkillsData.length);

    return (
        <div id='Skills' className='pt-16 md:pt-32 pb-20 bg-[#09101a]'>
            <h1 className='heading'>Education & <span className='text-yellow-400'>Employment</span></h1>
            <div className='w-[80%] mx-auto pt-16 md:pt-42 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-self-center'>
                {EmploymentHistory.map((employment: Employment, index: number) => <Fragment key={index}>
                    <EmploymentItem {...employment} />
                </Fragment>)}
            </div>
            <h1 className='heading'>Tools of the <span className='text-yellow-400'>Present and Future</span></h1>
            <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-4 text-center'>Core Competencies</h1>
            <div className='flex flex-wrap w-[95%] xl:w-[40%] lg:w-[60%] sm:w-[75%] mx-auto px-2 md:px-8 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 justify-center gap-6 lg:gap-12 mb-2'>
                {
                    coreCompetencies.map((skill: Skill) =>
                        <Fragment key={skill.name}>
                            <SkillItem {...skill} />
                        </Fragment>)
                }
            </div>
            <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-4 text-center'>Other Technologies I Had Experience With</h1>
            <div className='flex flex-wrap w-[80%] sm:w-[95%] mx-auto px-2 md:px-8 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 justify-center gap-6 lg:gap-12 mb-2'>
                {
                    otherTechnologies.map((skill: Skill) =>
                        <Fragment key={skill.name}>
                            <SkillItem {...skill} />
                        </Fragment>)
                }
            </div>
        </div>
    )
}

export default Skills;