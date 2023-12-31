import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/webwithvishu">
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/vishu221b/">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
    <div>
      <a href="https://github.com/Vishu-221b">
        <div>
          <FaGithub />
        </div>
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/vishu221b/">
        <div>
          <FaLinkedinIn />
        </div>
      </a>
    </div>
  </div>
);


export default SocialMedia;