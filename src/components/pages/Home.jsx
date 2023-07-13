import React from 'react';
import "./Home.css";
import Logo from "../../assets/github-logo.png";

export const Home = () => {
  return (
    <>
    <div className='container-home'>
        <div className="header">
            <img src={Logo} alt="logo" height="50px"/>
            <h1>Github search</h1>
        </div>
        <div className="mb-3">
            <label htmlFor='exampleFormControlInput1' className='form-label'>Username:</label>
            <input type='email' className='form-control' id='exampleFormControlInput1' placeholder='Input username'/>
        </div>
        <div className="d-grid gap-2">
            <button type='button home_button' className='btn btn-dark'>Search</button>
        </div>
        </div>
        <div className="user">
        <div className='image'>
          <img src="data:image/png;base64,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" height="50px" width="50px" alt="" />
        </div>
        <div className='user_info'>
          <h3>Name</h3>
          <small>ID:</small>
          <br />
          <button type="button home_button" className="btn btn-dark">View profile</button>
        </div>

      </div>
      </>
  )
}
