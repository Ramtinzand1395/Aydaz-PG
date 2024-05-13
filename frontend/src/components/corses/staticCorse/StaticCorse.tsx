import React from 'react'
import TopHeader from '../../header/TopHeader'
import Intro from './Intro'
import Sarfasl from './Sarfasl'
import Information from './Information'
import VideowComment from '../VideowComment'
import Footer from '../../footer/Footer'

const StaticCorse:React.FC = () => {
  return (
    <div>
        <TopHeader />
        <Intro />
        <Sarfasl />
        <Information />
        <VideowComment />
        <Footer />
    </div>
  )
}

export default StaticCorse