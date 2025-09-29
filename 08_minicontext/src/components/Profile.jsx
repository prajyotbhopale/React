import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <h1>Not logged in</h1>
  return (
    <h1>
      this is profile : {user.username}
    </h1>
  )
}

export default Profile
