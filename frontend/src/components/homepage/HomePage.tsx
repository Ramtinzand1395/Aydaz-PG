import React from 'react'
import Header from '../header/Header'
import CircleSlider from './circleSection/CircleSlider'
import VideosBox from './videosBox/VideosBox'
import WhyAyda from './whyAyda/WhyAyda'
import VideowPlayer from './videoPlayer/VideowPlayer'
import HomeGallery from './gallery/HomeGallery'
 import Questions from './FrequentlyAskedQuestions/Questions'
import Footer from '../footer/Footer'
  

const HomePage = () => {
  return (
    <div>
        <Header />
        <CircleSlider />
        <VideosBox />
        <WhyAyda />
        <VideowPlayer />
        <HomeGallery />
        <Questions />
        <Footer />
    </div>
  )
}

export default HomePage