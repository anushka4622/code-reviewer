import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import { useEffect } from 'react'
import { ThemeContext } from '../../App'

const Home = () => {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  const { theme, setTheme, themes } = useContext(ThemeContext)

  function navigateToProject(projectId){
    navigate(`/project/${projectId}`)
  }

  useEffect(()=>{
    axios.get('http://localhost:3000/projects/get-all')
    .then(response=>{
      setProjects(response.data.data)
    })
  },[])

  return (
    <main className='home' style={{ backgroundColor: theme.background }}>
      <section className='home-section'>
        <header className="home-header">
          <div className="header-left">
            <h1 style={{ color: theme.textPrimary }}>Code Review Projects</h1>
            <div className="theme-switcher">
              <button 
                className={`theme-btn ${theme === themes.light ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                <i className="ri-sun-line"></i>
              </button>
              <button 
                className={`theme-btn ${theme === themes.dark ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                <i className="ri-moon-line"></i>
              </button>
              <button 
                className={`theme-btn ${theme === themes.nature ? 'active' : ''}`}
                onClick={() => setTheme('nature')}
              >
                <i className="ri-leaf-line"></i>
              </button>
            </div>
          </div>
          <button onClick={()=>{navigate('/create-project')}}>
            <i className="ri-add-line"></i>
            New Project
          </button>
        </header>

        {projects.length === 0 ? (
          <div className="no-projects" style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}>
            <i className="ri-folder-add-line" style={{ color: theme.iconColor }}></i>
            <p style={{ color: theme.textSecondary }}>No projects created yet. Click "New Project" to get started!</p>
          </div>
        ) : (
          <div className="projects">
            {projects.map((project) => (
              <div 
                key={project._id}
                onClick={() => navigateToProject(project._id)} 
                className="project"
                style={{ 
                  background: theme.cardBg,
                  borderColor: theme.cardBorder
                }}
              >
                <div className="project-icon" style={{ 
                  background: theme.iconBg,
                  color: theme.iconColor
                }}>
                  <i className="ri-code-box-line"></i>
                </div>
                <div className="project-info">
                  <h3 style={{ color: theme.textPrimary }}>{project.name}</h3>
                  <p className="project-date" style={{ color: theme.textSecondary }}>
                    Created {new Date(project.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="project-action" style={{ color: theme.textSecondary }}>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home

