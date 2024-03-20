import "./styles.css";
import { useState, useRef } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    username === "user" && password === "password" ? setFlag(1) : setFlag(2);
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {flag === 0 ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username" name="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="password" name="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>

          <button type="submit" name="login">
            Submit
          </button>
        </form>
      ) : flag === 1 ? (
        "Welcome, user!"
      ) : (
        "Invalid username or password"
      )}
    </div>
  );
}

export default App;
