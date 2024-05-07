import React, { Fragment } from 'react'

import FeaturedProjects from '../../public/data/featured-projects.json';
import { Project } from '@/types';
import Card from './Card';

const Projects = () => {
    return (
        <div id='Projects' className='bg-[#02050a] pt-64 md:pt-32 pb-4'>
            <h1 className='heading'>
                Featured <span className='text-yellow-400'>Projects</span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-12 mt-16 text-white'>
                {FeaturedProjects.map((project: Project) => <Fragment key={project.title}>
                    <Card {...project} />
                </Fragment>)}
            </div>
        </div>
    )
}

export default Projects;