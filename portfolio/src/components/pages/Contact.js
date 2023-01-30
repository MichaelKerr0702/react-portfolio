import React from 'react';
import '../../style/style.css'

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Page</h1>
      <ul>
          <li>
          Phone-
            <a className='links' href='(714)804-9402 '>
              (714)804-9402              
            </a>
          </li>
          <li>
          Email- 
            <a className='links' href='MichaelKerr0702@gmail.com'>
               MichaelKerr0702@gmail.com    
            </a>
          </li>
          <li>
            GitHub-
            <a className='links' href='https://github.com/MichaelKerr0702?tab=repositories'>
            https://github.com/MichaelKerr0702?tab=repositories
            </a>
          </li>
      </ul>
    </div>
  );
}
