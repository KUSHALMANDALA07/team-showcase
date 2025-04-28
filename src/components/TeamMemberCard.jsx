import React from 'react'

const TeamMemberCard = ({data}) => {
  return (
    <div>
      <h4>Name : {data.name}</h4>
      <p>Job Title : {data.title}</p>
    </div>
  )
}

export default TeamMemberCard
