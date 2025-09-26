import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data  = useLoaderData();
  return (
    
    <div className='bg-green-600 text-5xl text-center h-20'>
      Github login: {data?.login}
      <h2>followers: {data?.followers}</h2>

      <div className="flex items-mid justify-center">
  <img
    src={data.avatar_url}
    alt="Avatar"
    className="mb-4"
    width={300}
  />
</div>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
    const response = await fetch("https://api.github.com/users/prajyotbhopale");
    return response.json();
}
