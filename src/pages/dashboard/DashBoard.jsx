import React, {useContext} from 'react';
import styled from 'styled-components'
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom'

import AuthContext from './../../auth/AuthContext'
// Importing our panels
import ViewAll from './panels/ViewAll';
import CreatePanel from './panels/CreatePanel';
import EditPanel from './panels/EditPanel';
import DeletePanel from './panels/DeletePanel';
 
 

const DashBoardStyles = styled.header ` 
      display:flex;
`

const SideBar = styled.aside `
position:relative;
z-index:1;  
width: 256px;
box-shadow: 0 0 5px 0 grey;
height: calc(100vh - 64px);
padding: 2rem;
header{
    margin-bottom:1rem;
    font-size: 13px;
}
h1{
    font-size: 1.25rem;
    font-weight:bold;

}
li{
    opacity:0.7;
    font-size: 12px;
    margin-bottom: 0.35rem;
}
`

const Panels = styled.aside `  
flex:1;
background:#f3f3f3;
height: calc(100vh - 64px);
`



const DashBoard = () => {
    // output the value of the authContext user
    const auth = useContext(AuthContext)
    const {path,url} = useRouteMatch()

    console.log(`Dashboard Render`)
      
       if(auth.authenticated){
        return ( 
            <DashBoardStyles>
                <SideBar>
                    <header>
                        <h1>Firebase App</h1>
                        <p>tagline goes here</p>
                    </header>
                    <ul>
                        {/* these links should look like this: /dashboard/create  */}
                        {/* but to avoid this, we will use useRouteMatch */}
                        <li><Link to={`${url}`}>view all</Link></li>
                        <li><Link to={`${url}/create`}>create content</Link></li>
                        <li><Link to={`${url}/edit`}>edit content</Link></li>
                        <li><Link to={`${url}/delete`}>delete content</Link></li>
                        
                    </ul>
                </SideBar>
                <Panels>
                    <Switch>
                        <Route path={path}><ViewAll/></Route>
                        <Route path={`${path}/create`}><CreatePanel/></Route>
                        <Route path={`${path}/edit`}><EditPanel/></Route>
                        <Route path={`${path}/delete`}><DeletePanel/></Route>
                    </Switch>
                </Panels>  
            </DashBoardStyles>
   
        )
       }else{
         return <Redirect to="/login"/>
       }
    
}
 
export default DashBoard;