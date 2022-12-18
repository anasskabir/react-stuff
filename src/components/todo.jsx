import './todo.css'

function Todo( {title} ) {
    function deleteTodo(){
        console.log('delete')
    }

    return (
    <div className='todo'>
      <p>{title}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default Todo;
