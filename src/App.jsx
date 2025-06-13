// import { useState } from 'react'
import './App.css'
import profileImg from './assets/amob.jpeg'

function App() {

  return (
    <main>
      <section className='profile-img-container'>
        <img src={profileImg} alt="My image" />
      </section>

      <section className="profile-information">
        <div>
          <h1>Abdulmujeeb Ballo</h1>
          <p>frontend developer</p>

          <div className="mail">
            <a href="mailto:balloabdulmujeeb42@gmail.com" className='btn mail-btn'><i className="fa fa-envelope" aria-hidden="true"></i> Email</a>

            <a href="https://www.linkedin.com" className='btn link-btn'><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>
          </div>

          <div className="about">
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </div>
      </section>

      <section className="social-handles">

      </section>
    </main>
  )
}

export default App
