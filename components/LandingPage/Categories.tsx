import { CategoriesbannerDataType } from '@/lib/interface'
import React from 'react'
import { LabelCard } from '../CustomCard/CustomCard'

interface Categoriesprops {
    categoriesData: CategoriesbannerDataType[]
}

const Categories: React.FC<Categoriesprops> = ({categoriesData}) => {
  return (
    <section className='flex justify-center flex-col md:flex-row gap-4 items-center mt-6'>
        {categoriesData.map((category: CategoriesbannerDataType) => {
            return (
                <LabelCard customText='text-[2rem]' category={category} btnLabel='View detail' custom=''/>
            )
        })} 
    </section>
  )
}

export default Categories