import React from 'react'
import LoginContext from './LoginContext'
const LoginProvider = () => {
    const user={

    }
  return (
    <div>
        <LoginContext.Provider value={user}>
            {children}
        </LoginContext.Provider>
    </div>
  )
}

export default LoginProvider