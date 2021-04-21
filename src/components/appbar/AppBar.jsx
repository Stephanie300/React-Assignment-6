import React from 'react';
import styled from 'styled-components';
import {Link, Redirect} from 'react-router-dom';


import firebaseApp from "./../../firebase/firebaseConfig";
// import AuthContext from 'auth/AuthContext'

const AppBarStyles = styled.nav`
    box-shadow: 0 0 3px 1px grey;
    position:relative;
    z-index:4;
    background-color:#ffffff;
   
    ul{
        display:flex;
        justify-content: center;
        align-items:center;
        height:64px;
        padding: 1rem;
    }
    li{
        margin: 0 1rem 0;
    }
    a{
        text-decoration:none;
        color:grey;
    }
`

const AppBar = () => {

    const handleLogOut = ()=>{
        firebaseApp.auth().signOut().then((userCredential) => {
            // Sign-out successful.
            return <Redirect to="/"/>;
          }).catch((error) => {
            // An error happened.
            console.log(error.code, error.message);
          });
        // firebaseApp.auth().signOut()
        // return <Redirect to="/"/>     
    }
    return ( 
        <AppBarStyles>
            <ul>
                <li><Link to="/">home</Link></li>
                {/* <li><Link to="/login">login</Link></li> */}
                {/* <li><Link to="/register">register</Link></li> */}
                <li><Link to="/dashboard">dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </ul>
        </AppBarStyles>
     );
}
 
export default AppBar;