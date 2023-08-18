import { useState } from 'react'
import './App.css'
import Card from './Card'
import Form from './Form'

function App() {

  const [profiles, setProfiles] = useState([])

  const AddProfile = (profile) => {
    setProfiles([...profiles, profile])
  }

  return (
    <div className='App'>
      <Form onAddProfile={AddProfile}/>
      <Card profiles={profiles}/>
    </div>
  )
}

export default App
