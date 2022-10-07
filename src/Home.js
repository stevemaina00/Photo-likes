import React from 'react'
import{Route, Routes} from "react-router-dom"
import Nav from './Nav'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Nav' element={<Nav/>} />
            <Route path='/Footer' element={<Footer/>} />
            </Routes>Home</div>
  )
}

export default Home