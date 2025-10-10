import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-800'>hello Tailwind</h1>
      <Card name="Blaze" post="IGL" photo="https://media.istockphoto.com/id/1796374503/photo/the-lion-king.jpg?s=1024x1024&w=is&k=20&c=KV62x6TgG6Fy5OkasdoImbGdnoOos8G4Jr_uAQVK-7I="/>
       <Card name="Ask" post="doctor"/>
        <Card name="Warcry" post="gamer" photo="https://images.pexels.com/photos/599708/pexels-photo-599708.jpeg
" />
        <Card />
        <Footer />
    </>
  )
}

export default App
