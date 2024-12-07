import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import vardaan from '../../assets/Vardaan - CarryMinati.mp3'



const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1}controls autoPlay muted></video> 
        <h3>Best Youtube Channel To Learn Web Development</h3>
        <div className="play-video-info">
          <p> 100k views &bull; 2 days ago</p>
        <div>
        <span><img src={like} alt=""/> 125 </span>
        <span><img src={dislike} alt=""/> 200 </span>
        <span><img src={share} alt=""/> share </span>
        <span><img src={save} alt=""/> save </span>
    </div>
  </div>
  <hr />
  <div className="publisher">
    <img src={jack} alt=""/>
    <div>
      <p>Coding Gita</p>
      <span> 1M subscribers </span>
    </div>
    <button> Subscribe</button>
  </div>
  </div>
      
  )
}

export default PlayVideo
