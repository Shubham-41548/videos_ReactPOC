import React from "react";
import style from './style.css'


const Videoitems = ({ video, onVideoSelect }) => {
   return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
         <img className="ui image" src={video.snippet.thumbnails.medium.url} />
         <div className="content">
            <div className="header">
               {video.snippet.title}</div>
         </div>
      </div>
   )
};

export default Videoitems;