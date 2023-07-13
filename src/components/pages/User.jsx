import React from 'react';
import "./User.css";
import Logo from "../../assets/github-logo.png";
import { Link } from 'react-router-dom';

export const User = () => {
  return (
    <>
            <div className="buttons">
                <Link to="/">
                <button type="button home_button" className="btn btn-dark">Go back</button>
                </Link>
            </div>
            <div className='profile_container'>

                <div className="profile_header">
                    <div className="header_image">
                    <img src={Logo} alt="logo" height="150px"/>
                    </div>
                    <div className="user_info2">
                        <h1>Username: </h1>
                        <p>BIO: </p>
                        <p>Location: </p>
                    </div>
                    <div className="repo">

                        <p>tu idu repozitoriji</p>
                    </div>


                </div>
            </div>
        </>
  )
}
