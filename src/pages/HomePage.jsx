import React from 'react'
import Banner from '../component/Banner'
import Flashsell from '../component/Flashsell'
import Limitted from '../component/Limitted'
import Bestsell from '../component/Bestsell'
import ContactPae from "../pages/ContactPae"

const HomePage = () => {
  return (
    <>
    <Banner />
    <Flashsell />
    <Limitted />
    <Bestsell />
    <ContactPae />
    </>
  )
}

export default HomePage