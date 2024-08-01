import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
  {
    id:1,
    title: "Tic-Tac-Toe Uygulaması",
    description: "react ile yapıldı",
    image: "/images/projects/tic-tac-toe.png",
    tag: ["All","Web"],
    gitUrl:"/",
    previewUrl: "/",
  },
  {
    id:2,
    title: "e-Commerce Uygulaması",
    description: "javascript ile yapıldı",
    image: "/images/projects/ecommerce.jpg",
    tag: ["All","Web"],
    gitUrl:"/",
    previewUrl: "/",
  },
  {
    id:3,
    title: "Todos Uygulaması",
    description: "react ile yapıldı",
    image: "/images/projects/todos.png",
    tag: ["All","Web"],
    gitUrl:"/",
    previewUrl: "/",
  },
  {
    id:4,
    title: "Todos Uygulaması",
    description: "react ile yapıldı",
    image: "/images/projects/todos.png",
    tag: ["All","Web"],
    gitUrl:"/",
    previewUrl: "/",
  },
];

const Projects = () => {
  return (
    <>
      <h2 className='text-white font-bold'>Projelerim </h2>
      <div>
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