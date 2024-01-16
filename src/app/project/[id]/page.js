import Navbar from '@/components/Navbar'
import projects from '@/data/projectdata';
import Link from 'next/link';
import React from 'react'

const ProjectDetails = ({ params }) => {

    const { id } = params;

    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }


  return (
    <div className='m-3'>
      <Navbar />
      <div className='mt-5 flex flex-col justify-center items-center gap-5'>
          <img src={project.image} alt='project' className='w-[40rem]' />
          <h1 className='text-2xl font-[700]'>{project.appName}</h1>
          <p className='md:px-10 text-center'>{project.description}</p>
          <Link href={project.link} target='_blank'>
          <button className='bg-green-500 px-4 py-2 text-white rounded-lg '>View {project.category =='' ? "":""}</button>
          </Link>
      </div>
 
    </div>
  )
}

export default ProjectDetails
