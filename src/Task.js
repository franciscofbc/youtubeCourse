export const Task = (props) => {

    return (
        <div className='listTask'>
            <h1 style={{ backgroundColor: props.completed && 'green' }}>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>
            <button onClick={() => props.completeTask(props.id)}>Completed</button>
        </div>
    )

}