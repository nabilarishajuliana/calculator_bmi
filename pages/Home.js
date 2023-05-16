import Benefit from '@/components/Benefit'
import Bmi from '@/components/Bmi'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import React from 'react'

function Home() {
  return (
    <>
    <Nav/>
    <section id='whatis'>
      <Header/>
    </section>
    <section id='benefit'>
      <Benefit/>
    </section>
    <section id='calculator'>
      <Bmi/>
    </section>
    <section id='aboutus'>
      <Footer/>
    </section>
    </>
  )
}

export default Home