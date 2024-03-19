import "./styles.css";
import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [show, setShow] = useState(false);
  const [fom, setFom] = useState(true);
  const [error, setError] = useState(false);
  const [maskedPassword, setMaskedPassword] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setLast((p) => p + value[value.length - 1]);
    // Masking the password with asterisks
    setMaskedPassword("*".repeat(value.length));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi");
    //setData();
    console.log(last);
    if (first == "user" && last == "password") {
      setShow(true);
      setFom(false);
      setError(false);
    } else if (first != "user" || last != "password") {
      setError(true);
      setFom(true);
      setShow(false);
    } else {
      setFom(true);
    }
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      {show && <div>Welcome, user!</div>}
      {error && <div>Invaild username or password</div>}
      {fom && (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              required
              placeholder="username"
              onChange={(e) => setFirst(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              required
              placeholder="password"
              value={maskedPassword}
              onChange={handlePasswordChange}
            />
          </label>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
