import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import './style.scss'
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';


function HeroBanner() {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { data, loading } = useFetch("/movie/upcoming")
    
    
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }


    const { url } = useSelector((state) => state.home)
  
    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 10)].backdrop_path
        setBackground(bg);
    }, [data])
    return (
            <div className="heroBanner">
                { <div className="backdrop-img">
                    <Img src={background} />
                
                </div> }

                <div className="opacity-layer">

                </div>

                <ContentWrapper>
                    <div className="heroBannerContent">
                        <span className="title">WelCome</span>
                        <span className="subTitle">Millions of Movies, TV shows and people to discover. Explore Now</span>
                        <div className="searchInput">
                            <input
                                type='text'
                                placeholder='Search a Movie or a TV Show'
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <button>Search</button>
                        </div>
                    </div>

                </ContentWrapper>

            </div>
    )
}

export default HeroBanner
