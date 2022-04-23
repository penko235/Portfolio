import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/penko-gadzhev-480848181/" target="_blank"><GrLinkedin /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/penkogadzhev/" target="_blank"><BsInstagram /></a>
        </div>
        <div>
            <a href="https://github.com/penko235" target="_blank"><BsGithub /></a> 
        </div>
    </div>
  )
}

export default SocialMedia