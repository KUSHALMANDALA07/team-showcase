import { useState } from 'react'
import './App.css'
import data from "./data.json"
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  const [members,SetMembers] = useState(data)
  console.log(data)

  return (
    <>
       {
        members.map((data) =>(
        <TeamMemberCard data={data} key={data.id}/>
        ))
       }
    </>
  )
}

export default App
