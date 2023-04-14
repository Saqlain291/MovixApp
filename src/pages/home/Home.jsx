import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import './style.scss'
import Trending from './trending/Trending'
import Papular from './papular/Papular'
import TopRated from './top Rated/TopRated'
function Home() {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Papular />
      <TopRated />
    </div>
  )
}

export default Home
