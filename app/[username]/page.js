import React from 'react'
const Username = ({params}) => {
    console.log(params.username);
  return (
    <div className='min-h-[calc(100vh-128px)]'>{params.username}</div>
  )
}

export default Username