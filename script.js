const {useState}=React;
function App()
{
    const [todos,setTodos]=useState([]);
    const [input,setInput]=useState('');

    const deleteTodo=(indexToRemove)=>{
        const newTodos=todos.filter((todo,index)=>index!=indexToRemove);
        setTodos(newTodos);
    };
    const addTodo=()=>{
        if(input.trim()!='')
        {
            setTodos([...todos,{text: input,completed:false}]);
            setInput('');
        }
    };
    const toggleTodo=(indexToToggle)=>{
        const updatedTodos=todos.map((todo,index)=>{
            if(index===indexToToggle){
                return {...todo,completed:!todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    const handleKeyDown=(e)=>{
        if(e.key==='Enter'){
            addTodo();
        }
    };
    return(
        <div>
        <h1>My To-Do App</h1>
        <input 
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task here"
            />
            <button onClick={addTodo}>Add Task</button>
            <ul>
            {todos.map((todo, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
            <input 
  type="checkbox" 
  checked={todo.completed} 
  onChange={() => toggleTodo(index)} 
  style={{ marginRight: '8px' }}
/>
            <span 
            onClick={() => toggleTodo(index)}
            style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            marginRight: '10px'
            }}
            >
            {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
            ))}
            </ul>
        </div>
    )
}
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);