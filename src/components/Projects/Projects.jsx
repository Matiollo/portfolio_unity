import React, { useState } from 'react'
import './Projects.css'
import clickbait1 from '../../assets/clickbait1.jpg'
import clickbait2 from '../../assets/clickbait2.jpg'
import { FaCirclePlay } from "react-icons/fa6"
import { IoPlay } from "react-icons/io5"
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const Projects = () => {

  const [videoSrc, setVideoSrc] = useState('')

  const handleVideoChange = (src) => {
    setVideoSrc(src)
  }

  const closeVideo = () => {
    setVideoSrc('')
  }

  const handleSeeLavaFloor = () => {
    window.open('https://github.com/Matiollo/lava_floor', '_blank')
  }

  const handleSeeRubiksCube = () => {
    window.open('https://github.com/Matiollo/rubiks_cube', '_blank')
  }

  return (
    <div className='projects container'>
      <div className='projects-content'>
        <h1>Projects</h1>
        <section className='reversed-section'>
          <div>
            <h2>Lava Floor</h2>
            <p className='project-description'>
              This game features a little girl who jumps from one piece of furniture to another, 
              pretending the floor is lava. Rules of the game are quite simple: don't touch the 
              floor and don't get caught by adults who are walking around the house. 
            </p>
            <p className='project-description'>
              This project highlights my skills working with 3D physics, characters spawning, 
              AI navigation, scenes navigation, UI elements and more.
            </p>
            <button className='btn dbtn' onClick={handleSeeLavaFloor}>See code</button>
          </div>
          <div className='project-video' onClick={() => handleVideoChange('../../assets/lava_floor.mp4')}>
            <img src={clickbait1} alt='' className='video-img' />
            <IoPlay className='play-icon-back' />
            <FaCirclePlay className='play-icon' />
          </div>
        </section>
        <section>
        <div>
            <h2>Rubik's Cube</h2>
            <p className='project-description'>
            This game allows players to engage with the popular puzzle - the Rubik's cube. 
            Player can rotate each layer vertically and horizontally, rotate the entire cube 
            to view it from different perspectives, shuffle it to make solving more interesting, 
            and solve it automatically to start over.
            </p>
            <p className='project-description'>
            This project showcases my skills in utilizing external libraries, adding UI elements 
            and managing complex logic of the puzzle.
            </p>
            <button className='btn dbtn' onClick={handleSeeRubiksCube}>See code</button>
          </div>
          <div className='project-video right-video' onClick={() => handleVideoChange('../../assets/rubiks_cube.mp4')}>
            <img src={clickbait2} alt='' className='video-img' />
            <IoPlay className='play-icon-back right-play-icon' />
            <FaCirclePlay className='play-icon right-play-icon' />
          </div>
        </section>
      </div>
      {videoSrc && <VideoPlayer videoSrc={videoSrc} onClose={closeVideo} />}
    </div>
  )
}

export default Projects