import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setIsLoggedIn }) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  useEffect(() => {
    const loggedUser =localStorage.getItem('loggedInUser');
    if (loggedUser) {
      setLoggedInUser(loggedUser);
      setIsLoggedIn(true);
    }
  })
  const handleEvent = (e) => {
    e.preventDefault()
    if (username === 'nitesh' && password === '123') {
      setIsLoggedIn(true)
      setLoggedInUser(username);
      localStorage.setItem('loggedInUser', username);
      navigate('/Login')
    } else {
      alert('Invalid Login') ---
    }
  }
  const handleLogout =() =>{
    setIsLoggedIn(false);
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
    navigate('/Login');
    }
  if(loggedInUser){
    return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Welcome, {loggedInUser}</h3>
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    </div>
    )
  }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleEvent}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login