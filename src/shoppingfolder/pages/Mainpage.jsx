import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import {Gents,Ladies} from '../data'
import Womencollections from '../components/Womencollections'

const Mainpage = () => {
    const[gentsfashion,setgentsfashion]=useState(Gents)
    const[ladiesfashion,setladiesfashion]=useState(Ladies)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collection gentsfashion={gentsfashion}/>
        <Womencollections ladiesfashion={ladiesfashion}/>
        <Footer/>
    </div>
  )
}

export default Mainpage