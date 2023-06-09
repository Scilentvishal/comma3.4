import React from 'react'
import About from '../components/home/About'
import Team from '../components/Team'
import Goal from '../components/about/Goal'
export const metadata = {
  title: 'About || Comma Technologies',
  description: 'About Commatechnologies',
}

const page = () => {
  return (
    <div>
      <About className="" />
      <Goal class="w-full bg-gradient-to-r px-[1rem] to-black from-[#0b0b3e]" />
      <Team />
    </div>
  )
}

export default page