import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // Functions To Handle All The Logic & Events
  const InputHandler = (event) => {
    setInputText(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, inputText]);
    setInputText("");
  };

  return (
    <>
      <header className="flex justify-center items-center">
        <h1 className="justify-center items-center font-semibold text-4xl mt-8 mb-10">
          Todo List Application
        </h1>
      </header>

      <form action="">
        <main className="justify-center items-center flex mt-4">
          {/* Your main application content goes here */}

          {/* Search Input */}
          <div>
            <input
              type="text"
              className="border border-gray-300  px-4 py-2 rounded-2xl bg-white text-black h-12 w-104 font-semibold text-center"
              placeholder="Enter Your Task"
              value={inputText}
              onChange={InputHandler}
            />
            <button
              className="border h-12 w-26 rounded-2xl bg-violet-800 font-bold fon hover:cursor-pointer"
              type="submit"
              onClick={onSubmitHandler}
            >
              Submit
            </button>
          </div>
        </main>
      </form>

      {/* Showing Input of lst added */}

      <div className="justify-center items-center flex mt-8">
        <div className="block">
          <h2 className="text-3xl font-semibold justify-center items-center">
            Your Todos
          </h2>

          <div>
            <ul className="">
              {todos.map((todo, i) => (
                  <li key={i}>
                    {todo}
                    <button className="bg-green-500">Move Up</button>
                    <button className="bg-amber-700">Move down</button>
                    <button className="bg-red-500">Delete</button>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
