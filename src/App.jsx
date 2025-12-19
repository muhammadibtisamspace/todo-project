function App() {
  const getText = null;

  const InputHandler = (event) => {
    console.log(event.target.value);
    
  }

  return (
    <>
      <header className="flex justify-center items-center">
        <h1 className="justify-center items-center font-semibold text-4xl mt-8 mb-10">
          Todo List Application
        </h1>
      </header>

      <main className="justify-center items-center flex mt-4">
        {/* Your main application content goes here */}

        {/* Search Input */}
        <div>
          <input
            type="text"
            className="border border-gray-300  px-4 py-2 rounded-2xl bg-white text-black h-12 w-104 font-semibold text-center"
            placeholder="Enter Your Task"
            onChange={InputHandler}
          />
          <button className="border h-12 w-26 rounded-2xl bg-violet-800 font-bold fon hover:cursor-pointer">
            Submit
          </button>
        </div>
      </main>

      {/* Showing Input of lst added */}

      <div className="justify-center items-center flex mt-8">
        <div className="block">
          <h2 className="text-3xl font-semibold justify-center items-center">
            Your Todos
          </h2>
          <div className="h-168 w-264 bg-white rounded-3xl mt-4 text-black p-4 text-start gap-4 justify-center items-center">
            <p>{getText}</p>

            <button className="bg-green-500">Move Up</button>
            <button className="bg-amber-700">Move down</button>
            <button className="bg-red-500">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
