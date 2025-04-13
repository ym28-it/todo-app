import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/hello')
      .then(Response => {
        if (!Response.ok) {
          throw new Error('Network response was not ok');
        }
        return Response.json();
      })
      .then(data => {
        setMessage(data.message);
      })
      .catch(Error => {
        console.error('Error fetching data:', Error);
      });
  }, []);

  const [input, setInput] = useState("");
  const [echo, setEcho] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/echo", {
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({message: input })
      });
      const data = await response.json();
      setEcho(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message ? message : "Loading..."}
        </p>
        <h2>Echo</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Input Message'
          rows={4}
          cols={50}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <div>
          <h3>Result:</h3>
          <p>{echo}</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
