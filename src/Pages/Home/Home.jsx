import React from 'react'
import Header from '../../HomeComponent/Header/Header'
import Menu from '../../HomeComponent/Menu/Menu'
import Banner from '../../HomeComponent/Banner/Banner'
import FeatureProduct from '../../HomeComponent/FeatureProduct/FeatureProduct'
import LatestProduct from '../../HomeComponent/LatestProduct/LatestProduct'
import Shopex from '../../HomeComponent/Shopex/Shopex'
import TrendingBanner from '../../HomeComponent/TrendingBanner/TrendingBanner'
import TrendingProduct from '../../HomeComponent/TrendingProduct/TrendingProduct'
import OffProduct from '../../HomeComponent/OffProduct/OffProduct'
import DiscountPart from '../../HomeComponent/DiscoutPart/DiscountPart'

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <FeatureProduct title={"Featured Products"}/>
      <LatestProduct title={"Leatest Products"}/>
      <Shopex />
      <TrendingBanner />
      <TrendingProduct title={"Trending Products"}/>
      <OffProduct />
      <DiscountPart title={"Discount Item"}/>
    </>
  )
}

export default Home
