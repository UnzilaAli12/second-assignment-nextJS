import Image from "next/image"
import Headers from "./components/Header"
import Footer from "@/app/components/Footer"
import Hero from "@/app/components/Hero"


import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Headers />
      <Hero    />
      <Footer  />
    </div>
  )
}

export default Homepage
