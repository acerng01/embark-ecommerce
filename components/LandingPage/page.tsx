import React from 'react'
import Hero from './Hero'
import { BannerDataType, CategoriesbannerDataType, productType } from '@/lib/interface'
import Featured from './Featured'
import Categories from './Categories'

interface LandingPageProps {
    bannerData: BannerDataType,
    featuredProducts: productType[]
    categoriesData: CategoriesbannerDataType[]
}
const LandingPage: React.FC<LandingPageProps> = ({bannerData, featuredProducts, categoriesData}) => {
  return (
    <section className='flex flex-col w-full'>
        <Hero bannerData={bannerData}/>
        <Featured featuredProducts={featuredProducts}/>
        <Categories categoriesData={categoriesData}/>
    </section>
  )
}

export default LandingPage