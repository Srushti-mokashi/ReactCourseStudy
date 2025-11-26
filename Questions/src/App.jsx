import React, { Suspense, useState } from "react";
import "./App.css";
import LoginForm from "./Components/loginForm";
import SearchBar from "./Components/SearchBar";

const ChildComponent = React.memo(({ count }) => {
  console.log("Child component rendered");
  return <h2>Value is {count}</h2>;
});

// Code splitting using React.lazy and dynamic import
const About = React.lazy(() => import("./Components/About"));
const Contact = React.lazy(() => import("./Components/Contact"));

function App() {
  console.log("Parent Component called");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div>
        <ChildComponent count={count} />
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Click me
        </button>

        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Type something..."
          aria-label="text-input"
        />
      </div>

      <hr />
      <h2>Code Splitting using React.lazy and dynamic import</h2>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setShowAbout(true)}>Load About Component</button>
        <button onClick={() => setShowContact(true)} style={{ marginLeft: 8 }}>
          Load Contact Component
        </button>
      </div>

      <Suspense fallback={<p>Loading component…</p>}>
        {showAbout && <About />}
        {showContact && <Contact />}
      </Suspense>

      <LoginForm />
      <SearchBar />
    </>
  );
}

export default App;