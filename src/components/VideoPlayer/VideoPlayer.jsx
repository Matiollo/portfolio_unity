import React, { useState, useEffect } from 'react'
import './VideoPlayer.css'
import { MdClose } from "react-icons/md";

const VideoPlayer = ({ videoSrc, onClose }) => {
  
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    const importVideo = async () => {
      try {
        const module = await import(videoSrc);
        setVideoURL(module.default);
      } catch (error) {
        console.error('Error loading video:', error);
      }
    };

    importVideo();
  }, [videoSrc]);
  
  return (
    <div className='video-player'>
      <div className='video-container'>
        <video src={videoURL} autoPlay controls></video>
        <button className="close-btn" onClick={onClose}><MdClose /></button>
      </div>
    </div>
  )
}

export default VideoPlayer