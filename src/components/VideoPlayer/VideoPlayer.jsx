import React from 'react'
import './VideoPlayer.css'
import { MdClose } from "react-icons/md"
import lava_floor_video from '../../../public/lava_floor.mp4'
import rubiks_cube_video from '../../../public/rubiks_cube.mp4'

const VideoPlayer = ({ videoSrc, onClose }) => {  
  return (
    <div className='video-player'>
      <div className='video-container'>
        <video src={videoSrc == 'lava_floor' ? lava_floor_video : rubiks_cube_video} autoPlay controls></video>
        <button className="close-btn" onClick={onClose}><MdClose /></button>
      </div>
    </div>
  )
}

export default VideoPlayer