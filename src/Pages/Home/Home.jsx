import React from 'react'
import Header from '../../HomeComponent/Header/Header'
import Menu from '../../HomeComponent/Menu/Menu'
import Banner from '../../HomeComponent/Banner/Banner'
import FeatureProduct from '../../HomeComponent/FeatureProduct/FeatureProduct'
import LatestProduct from '../../HomeComponent/LatestProduct/LatestProduct'

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <FeatureProduct title={"Featured Products"}/>
      <LatestProduct title={"Leatest Products"}/>
    </>
  )
}

export default Home