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
import TopCatagories from '../../HomeComponent/TopCatagories/TopCatagories'
import Updatebanner from '../../HomeComponent/UpdateBanner/Updatebanner'
import LatestBlog from '../../HomeComponent/LatestBlog/LatestBlog'
import FooterTop from '../../HomeComponent/Footer/FooterTop/FooterTop'
import FooterBottom from '../../HomeComponent/Footer/FooterBottom/FooterBottom'

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
      <TopCatagories title={"Top Catagories"}/>
      <Updatebanner />
      <LatestBlog  title={"Leatest Blog"}/> 
      <FooterTop />
      <FooterBottom />
    </>
  )
}

export default Home
