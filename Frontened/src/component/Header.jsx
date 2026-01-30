import React,{useMemo} from 'react'

const Header = () => {
    console.log("Header Rendered");
  return (
    <div>header</div>
  )
}

export default React.memo(Header)