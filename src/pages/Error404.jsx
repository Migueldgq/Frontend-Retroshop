import { Link } from "react-router-dom"


const Error404 = () => {
  return (
    <div className="container">
    <video  autoPlay loop muted  className="video">
        <source src="retro.mp4" type="video/mp4"/>
        <Link className="video_link"to={`${import.meta.env.VITE_BASE_URL}:5173`}> volver</Link>
    </video>
    </div>
  )
}

export default Error404