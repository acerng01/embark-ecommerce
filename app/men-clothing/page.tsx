'use client'
import React from 'react'
import useFetchData from '../hooks/useFetchData'
import Loading from '@/components/Button/Loading'
import CategoryPage from '@/components/CategoryPage/CategoryPage'

const MenClothing = () => {
  const {isLoading, banner, categories, products: menProducts} = useFetchData({url: 'men-clothing', categoryUrl: 'men-clothing', fetchBanner: true, fetchCategories: false})
  return (
    <>
        {isLoading ? (
          <Loading/>
        ) : (
          <div className=''>
            <CategoryPage products={menProducts} banner={banner}/>
          </div>
        )}
    </>
  )
}
export default MenClothing 