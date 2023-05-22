import React from 'react'

import Navigation from '../Components/Navigation/index'

import header from '../Images/header.png'

const Home = () => {
  return (
    <div>
      <Navigation />
      <img src={header} alt="header" style={{ width: "100%", height: "auto" }} />
    </div>
  )
}

export default Home