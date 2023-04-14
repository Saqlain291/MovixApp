import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../Playbtn";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {console.log(data)}
                
                {!loading ? (
                    <div className="videos">
                        {
                            data?.results?.map((i)=> {
                               return(
                                <div
                                key={i.id} 
                                className="videoItem"
                                onClick={() =>{
                                   setVideoId(i.key)
                                   setShow(true)
                                }}
                                >
                                   
                                   <div className="videoThumbnail">
                                       <Img src={`https://img.youtube.com/vi/${i.key}/mqdefault.jpg`} />
                                       <PlayIcon />
                                   </div>
                                   <div className="videoTitle">
                                       {i.name}
                                   </div>
                               </div>
                               )
                            })
                        }
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;
