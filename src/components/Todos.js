import React from 'react'
import TodoInput from '../components/TodoInput'
import Table from 'react-bootstrap/Table'



const Todos = (props) => {
// console.log(props)

  return (
    <div className="todos-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Due Date</th>
          </tr>
        </thead>

        {props.course && props.course.todos.map(todo =>
          <tbody key={todo.id}>
            <tr>
              <td>{todo.content}</td>
              <td>{todo.due_date}</td>
            </tr>
          </tbody>
        )}
      </Table>

      <TodoInput course={props.course}/>
    </div>

  )
}

export default Todos
