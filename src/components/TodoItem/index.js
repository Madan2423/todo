import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details

  const deleteItem = () => {
    deleteTodoItem(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button className="btn" onClick={deleteItem} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
