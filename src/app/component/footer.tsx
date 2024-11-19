import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer-main'>
      <div className='footer-width'>
      <div className='white-space'>
      <img src='/LogoIcon.png'></img>
      <p>whitepace</p>
      </div>
      <h6>whitepace was created for the new ways we live and work. We make a better workspace around the world</h6>
      </div>  

      <div className='footer-width'>
      <div className='white-space'>
      <p>Product</p>
      </div>
      <ul>
        <li className='link'><Link href="">Overview</Link></li>
        <li className='link'><Link href="">Pricing</Link></li>
        <li className='link'><Link href="">Customer Stories</Link></li>
      </ul>
      
      </div>  
  
      <div className='footer-width'>
      <div className='white-space'>
      <p>Resources</p>
      </div>
      <ul>
        <li className='link'><Link href="">Blog</Link></li>
        <li className='link'><Link href="">Guide & tutorials</Link></li>
        <li className='link'><Link href="">Help centre</Link></li>
      </ul>
      
      </div>  

      <div className='footer-width'>
      <div className='white-space'>
      <p>Comany</p>
      </div>
      <ul>
        <li className='link'><Link href="">About us</Link></li>
        <li className='link'><Link href="">Careers</Link></li>
        <li className='link'><Link href="">Media kit</Link></li>
      </ul>
      
      </div>
      </div>
  )
}

export default Footer