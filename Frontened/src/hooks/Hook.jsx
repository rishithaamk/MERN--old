import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to ='useState'>useState</Link></li>
            <li><Link to ='useEffect'>useEffect</Link></li>
            <li><Link to ='useEffectApi'>useEffectwithApi</Link></li>
            <li><Link to ='UseRef'>useRef</Link></li>
            <li><Link to ='UseReducer'>useReducer</Link></li>
            <li><Link to ='UseMemo'>useMemo</Link></li>
             <li><Link to ='useCallback'>useCallback</Link></li>
            
        </ol>
        <Outlet/>

    </div>
  )
}

export default Hook