import React from 'react'
import ProfileCard from './profile/ProfileCard'
import ProfileCard2 from './profile/ProfileCard2'
import TeamList from './TeamList'

const FixedCard = () => {
  return (
    <div className="flex flex-col lg:gap-0 gap-15 lg:w-full w-full lg:min-h-screen min-h-[100vh]  sticky mt-[15vh]"> {/* removed sticky here */}
      <div className="profile1 lg:w-full lg:h-screen h-full sticky top-0">
        <ProfileCard />
      </div>
      <div className="profile2 lg:w-full lg:h-screen h-full sticky top-0">
        <ProfileCard2 />
      </div>
       <TeamList />
    </div>
  )
}

export default FixedCard