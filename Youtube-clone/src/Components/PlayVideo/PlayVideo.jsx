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
      
    </div>
  )
}

export default PlayVideo