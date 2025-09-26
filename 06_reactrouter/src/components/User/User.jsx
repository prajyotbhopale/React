import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams();
  return (
    <div className='text-3xl bg-amber-600 h-20 flex items-center justify-center'>
  User: {userid}
</div>
  )
}

export default User
