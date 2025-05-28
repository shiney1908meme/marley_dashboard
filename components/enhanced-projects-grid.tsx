"use client"

import type React from "react"

import { Box, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { Masonry } from "@mui/lab"
import { useState } from "react"

import ProjectCard from "@/components/project-card"
import type { IProject } from "@/types"

interface EnhancedProjectsGridProps {
  projects: IProject[]
}

const EnhancedProjectsGrid: React.FC<EnhancedProjectsGridProps> = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>

        {/* Search Bar */}
        <TextField
          fullWidth
          placeholder="Search projects..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Masonry>
        ) : (
          <Typography variant="body1">No projects found.</Typography>
        )}
      </Box>
    </Container>
  )
}

export default EnhancedProjectsGrid
