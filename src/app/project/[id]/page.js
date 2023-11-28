import Navbar from '@/components/Navbar'
import projects from '@/data/projectdata';
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
          <p>{project.description}</p>
          <button>View {project.category =='' ? "":""}</button>
      </div>
 
    </div>
  )
}

export default ProjectDetails
