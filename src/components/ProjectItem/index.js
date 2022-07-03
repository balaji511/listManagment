import './index.css'

const ProjectItem = props => {
  const {details} = props
  const {projectId, category, imageURL, title, description} = details
  return (
    <li className="project-item-container">
      <img src={imageURL} alt={title} className="project-item-image" />
      <p>{title}</p>
      <p>{description}</p>
    </li>
  )
}

export default ProjectItem
