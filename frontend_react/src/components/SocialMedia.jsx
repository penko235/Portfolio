import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/penko-gadzhev-480848181/" target="_blank">
        <div>
            <GrLinkedin />
        </div>
      </a>
      <a href="https://www.instagram.com/penkogadzhev/" target="_blank">
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://github.com/penko235" target="_blank">
        <div>
            <BsGithub />
        </div>
      </a> 
    </div>
  )
}

export default SocialMedia