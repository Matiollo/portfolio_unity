import React from 'react'
import './Hero.css'
import { BsDownload } from "react-icons/bs"
import hand from '../../assets/hand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {  

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '../../../Anastasiia_Krasnoshapka_Unity_Developer.pdf'
    link.download = 'Anastasiia_Krasnoshapka_Unity_Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className='hero container'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>Hello! I'm Anastasiia,</h1>
          <h2>Computer Science student</h2>
          <p className='description-text'>
            I'm Anastasiia, a computer science student passionate about game development. 
            With a strong foundation in C# and hands-on experience with Unity game engine, 
            I would love to participate in bigger projects that will bring entertainment and excitement to a lot of people. 
          </p>
          <p className='description-text'>
            Please, explore my portfolio and see if I'm a good fit for your team!
          </p>
          <button className='btn' onClick={handleDownload}>Resume <BsDownload className='download-icon' /></button>
          <a href="https://github.com/Matiollo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='social-icon github-icon' icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/anastasiia-krasnoshapka-b37473228/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='social-icon linkedin-icon' icon={faLinkedin} />
          </a>
          <a href="mailto:anastasiia.krasnoshapka@gmail.com">
            <FontAwesomeIcon className='social-icon envelope-icon' icon={faEnvelope} />
          </a>
        </div>
        <div className='hand-holder'>
          <img src={hand} />
        </div>
      </div>
    </div>
  )
}

export default Hero