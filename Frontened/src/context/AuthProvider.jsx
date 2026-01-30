import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {

    const user={
        id:1,
        name:"vikyy",
        email:"viky@gmail.com"
    }
  return (
    
    <div>
        <AuthContext.Provider value={user}>
            {children}
        
        </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider