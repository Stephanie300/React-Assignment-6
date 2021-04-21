import React, {useState} from 'react';

const AuthContext = React.createContext(null)



const AuthProvider = (props) => {
    
    //const [user, setUser] = ({role:"admin", uid:null, authenticate:false});

    return ( 
        <AuthContext.Provider value={{role:"admin", uid:null, authenticated:false}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export  {AuthProvider}

export default AuthContext
 