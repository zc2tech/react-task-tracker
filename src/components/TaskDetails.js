import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useLocation
} from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true)
  const [task, setTask] = useState({})
 
  const params = useParams()
  const navigate = useNavigate()
  const {pathname} = useLocation()
  useEffect(() => {
       // Fetch ONE Task
      const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
        const data = await res.json()
        
        if (res.status === 404 ) {
          navigate('/')
        }
        setTask(data)
        setLoading(false)
      }
      fetchTask() 
    },[navigate,params]
  )

  return loading ? (
    <h3>...loading</h3>
    ):(
    <div>
      <p>{pathname}</p>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <p><Link to='/'>Go Home</Link></p>
      <p><Button 
      onClick={() => navigate(-1)}      
      text="Go Back" /></p>
    </div>
    )
  
}

export default TaskDetails
