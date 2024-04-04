import { useState } from "react"

type Todo = {
  id: number;
  text: string;
};


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [ inputValue, setInputValue ] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Prevent adding empty todo
    const newTodo: Todo = {
      id: todos.length + 1,
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue(''); 
  }

  return (
    <div className="flex min-h-screen flex-col bg-yellow-100 font-mono">
      <form className="flex flex-col p-5 gap-3 w-2/4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">To-Do</h1>
        <span className="flex gap-5">
          <input
            type="text"
            placeholder="Type your task"
            className="flex-1 bg-transparent border border-black py-1 px-5 rounded-lg"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="border border-black py-1 px-5 rounded-lg">Add</button>          
        </span>
      </form>
      <div className="flex flex-col px-5 gap-3 w-2/4">
        <h3 className="text-xl font-semibold">Your tasks</h3>
        <hr className="flex-1 border-2 border-black" />
        <ul className="list-disc px-10 py-3 border border-black rounded-lg flex flex-col gap-1 text-lg">
          {todos.length === 0 ? (
            <p className="flex justify-center">No tasks yet</p>
          ) :
            todos.map(todo => (
            <li>{todo.text}</li>
          ))          
        }
        </ul>
      </div>
    </div>
  )
}

export default App
