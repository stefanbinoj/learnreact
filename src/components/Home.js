import React, { useState } from 'react'

function Home() {
    const[input,setInput]=useState('Enter pls')
    const onChange= (event)=>{
        setInput(event.target.value)
    }
    return (
        <div className='container'>
            This is home
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" value={input} onChange={onChange} placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="d-flex mt-5">

                <p className='d-inline'>Preview : </p>
                <p>{input?input:"ENter username"}</p>

            </div>
        </div> 
    )
}

export default Home
