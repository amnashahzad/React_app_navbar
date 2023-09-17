import React from 'react'
import Button from '@/Component/Button/Button';

export default function Card() {
  return (
    <>
    <img src="https://wp.wp-preview.com/cryptibit/cryptibit-6/wp-content/uploads/2019/07/Logo-main6-crypto.png" alt="" width="30%" className='image'/>
    <ul className='nav'>
        <li>
          <a href="#" class="orange">Home</a>
        </li>
        <li>
          <a href="#" class="orange">About</a>
        </li>
        <li>
          <a href="#" class="orange">Blog</a>
        </li>
        <li>
            <a href="#" class="orange">Contact</a>
          </li>
          <li>
            <a href="#" class="orange">FAQ</a>
          </li> 
          <button className='button'><a herf="">Get token</a></button>
      </ul>
    {/* <Button text="Card Heading..." className='card-heading'/> */}
      
    </>
  )
}
