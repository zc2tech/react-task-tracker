import { Link } from "react-router-dom"
const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>      
      <p>This is "About" element </p>
      <p><Link to='/'>Back to Home</Link></p>
    </div>
  )
}

export default About
