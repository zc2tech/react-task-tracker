import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText ] = useState('')
  const [day, setDay ] = useState('')
  const [reminder, setRemind ] = useState(false)
  
  const onSubmit= (e) => {
    e.preventDefault()
    if(!text) {
      alert('Please add a task')
    }

    onAdd( {text, day, reminder} )

    setText('')
    setDay('')
    setRemind(false)
  }
  return (
    <form className="add-form" onSubmit={onSubmit} >
      <div className="form-control">
        <label>Task</label>
        <input type="text" value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" value={day} 
         onChange={(e) => setDay(e.target.value)}
        placeholder='Add Day & Time' />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" value={reminder} 
          checked={reminder}
          onChange={(e) => setRemind(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask
