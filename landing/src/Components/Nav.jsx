import React from 'react'

export default function Nav() {
  return (
    <div>
       <nav>
        <div className="logo">
          <img src="/Images/brand_logo.png" alt="" />
        </div>

        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Services</li>
        </ul>

        <div className="button">
          <button>Login</button>
        </div>
      </nav>
      
    </div>
  )
}
