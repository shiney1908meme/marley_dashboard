import type React from "react"
import type { Project } from "@/types/project"
import ProjectCard from "@/components/project-card"

interface DynamicProjectsGridProps {
  projects: Project[]
}

const DynamicProjectsGrid: React.FC<DynamicProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default DynamicProjectsGrid
