import React,{useState,useContext}from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    const {setUser} = useContext(UserContext)
    
  return (
    <div>
      <input type='text' value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='email@gmail.com' />
      <input type='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' />
      <button onClick={handleSubmit} className='btn bg-blue-600'>Submit</button>

    </div>
  )
}

export default Login
