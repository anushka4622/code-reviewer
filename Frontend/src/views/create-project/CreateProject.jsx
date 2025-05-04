import React, { useState } from 'react'
import './CreateProject.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateProject = () => {
  const [projectName, setprojectName] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:3000/projects/create", {
      projectName
    }).then(()=>{
      navigate('/')
    })
  }
   
  return (
    <main className="create-project">
      <section className="create-project-section">
        <form onSubmit={handleSubmit}>
          <h1>Create New Project</h1>
          <input 
            type="text"
            name="projectName"
            placeholder="Enter project name"
            required
            onChange={(e) => setprojectName(e.target.value)}
            value={projectName || ""}
          />
          <input type="submit" value="Create Project" />
        </form>
      </section>
    </main>
  )
}

export default CreateProject