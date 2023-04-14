import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

function TopRated() {
    const [endpoint, setEndPoint] = useState("movie");


    const{data, loading} = useFetch(`/${endpoint}/top_rated`)
    console.log(data);
    const onTabChange = (tab) =>{
        setEndPoint(tab === "Movie" ? "movie" : "tv");
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTabs data={["Movie", "TV Shows"]}  onTabChange={onTabChange} />
      </ContentWrapper> 
        <Carousel data  = {data?.results}  loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default TopRated
