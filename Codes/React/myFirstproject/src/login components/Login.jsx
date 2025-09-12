import React, { useState } from 'react'

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function sub(e){
    e.preventDefault();
    const success = props.login(username, password);

    if(!success){
      setError("Invalid username or password");
    }
  }
  return (
    <>
      <form onSubmit={sub}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email username</label>
          <input type="text" class="form-control" id="exampleInputEmail1" value={username} onChange={(e) => {
            setUsername(e.target.value);
          }} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="text" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => {
            setPassword(e.target.value);
          }} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </>
  )
}

export default Login