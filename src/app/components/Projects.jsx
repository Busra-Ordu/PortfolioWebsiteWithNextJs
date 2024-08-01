import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
  {
    id:1,
    title: "Tic-Tac-Toe Uygulaması",
    description: "react ile yapıldı",
    image: "/images/projects/tic-tac-toe.png",
    tag: ["Hepsi","Sadece-Next"],
    gitUrl:"/",
    previewUrl: "/",
  },
  {
    id:2,
    title: "e-Commerce Uygulaması",
    description: "javascript ile yapıldı",
    image: "/images/projects/ecommerce.jpg",
    tag: ["Hepsi","Sadece-Next"],
    gitUrl:"/",
    previewUrl: "/",
  },
  {
    id:3,
    title: "Todos Uygulaması",
    description: "react ile yapıldı",
    image: "/images/projects/todos.png",
    tag: ["Hepsi","Sadece-Next"],
    gitUrl:"/",
    previewUrl: "/",
  },
  {
    id:4,
    title: "Todos Uygulaması",
    description: "react ile yapıldı",
    image: "/images/projects/todos.png",
    tag: ["Hepsi","Sadece-Next"],
    gitUrl:"/",
    previewUrl: "/",
  },
];

const Projects = () => {
  return (
    <>
      <h2 className=' text-center text-4xl font-bold text-white mt-4 mb-5'>
        Projelerim 
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>

        <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer '>
          Hepsi
        </button>
        <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer '>
          Next.js
        </button>
        <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer '>
          React.js
        </button>
        </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
          projectData.map((project) => (
          <ProjectCard 
          key={project.id} 
          title={project.title} 
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  )
}

export default Projects