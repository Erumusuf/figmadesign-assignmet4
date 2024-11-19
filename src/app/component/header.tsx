import Link from 'next/link'
import React from 'react'

function Header() {
  return (
  <div className='header-main'>
      <div className='header-up'>
          <div className='header-one'>
          <p>Sign up and get 20% off to your first order. </p>
          <p><u><Link href=''>Sign Up Now </Link> </u></p>
          </div>
          <div className='header-cross'>
          <img src='/cross-sign.png'></img>
          </div>
      </div>
      <div className='header-down'>
          <div className='header-shop'>
          <h3>SHOP.CO</h3>
          </div>
          <div className='header-shoparrow'>
          <p>Shop</p>
          <img src='/downarrow.png'></img>
          </div>
          <ul className='header-ul'>
          <li className='link'><Link href="">On sale</Link></li>
          <li className='link'><Link href="">New Arrivals</Link></li>
          <li className='link'><Link href="">Brands</Link></li>
          </ul>
          <div className='header-searchbar'>
          <img src='/searchbar.png'></img>
          <p>Search for products...</p>
          </div>
          <div className='header-trash'>
          <img src='/trolley.png'></img>
          <img src='/person-img.png'></img>
          </div>
       
       
       
        
      
        </div>   
  </div>
  )
}                     

export default Header