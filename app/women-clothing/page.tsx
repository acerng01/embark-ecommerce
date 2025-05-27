'use client'
import Loading from '@/components/Button/Loading'
import CategoryPage from '@/components/CategoryPage/CategoryPage'
import React from 'react'
import useFetchData from '../hooks/useFetchData'

const WomenClothing = () => {
  const {isLoading, banner, categories, products: womenProducts} = useFetchData({url: 'women-clothing', categoryUrl: 'women-clothing', fetchBanner: true, fetchCategories: false})
  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className=''>
          <CategoryPage products={womenProducts} banner={banner}/>
        </div>
      )}
    </>
  )
}
export default WomenClothing