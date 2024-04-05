import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function IntroductionPage() {

    const navigate = useNavigate();

  return (
    <div className='singUp'>
      <h1>My personal page, here you can find more about me</h1>
    </div>
  )
}
