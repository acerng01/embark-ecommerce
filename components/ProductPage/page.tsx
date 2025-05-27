'use client'
import { productType } from '@/lib/interface'
import React, { useState } from 'react'
import AddToCartBtn from '../Button/AddToCartBtn'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'

interface ProductPageProps {
    productId: string
    product: productType
}

const ProductPage: React.FC<ProductPageProps> = ({productId, product}) => {
    const [selectedId, setIndex] = useState(0)
  return (
    <div className='mt-12 grid md:grid-cols-6 grid-col-1 text-center items-center'>
        <div className="md:col-start-2 md:col-span-3 flex flex-col items-center">
        <ProductCarousel product={product} setIndex={setIndex} selectedId={selectedId}/>
        <ProductPreview product={product} setIndex={setIndex} selectedId={selectedId}/>
        </div>

        <div className='mt-12 text-[1.5rem] md:text-[2rem] md:col-start-5 self-start md:text-start'>
            <p className='font-semibold'>{product.title}</p>
            <p className='text-[1.5rem]'>${product.price}</p>
            <p className='font-extralight my-4 text-[1.5rem]'>{product.description}</p>
            <p className='text-[1.25rem]'>Quantity: {product.quantity}</p>
            <AddToCartBtn  product={product}/>
        </div>
    </div>
  )
}

export default ProductPage

interface CarouselProps {
    product: productType
    setIndex: React.Dispatch<React.SetStateAction<number>>
    selectedId: number
}

const ProductCarousel: React.FC<CarouselProps> = ({product, setIndex, selectedId}) => {
    const previousClick = () => {
        if (selectedId > 0) {
            setIndex((prev) => prev - 1)
        }
    }
    const nextClick = () => {
        if (selectedId < product.images.length - 1) {
            setIndex((prev) => prev + 1)
        }
    }
    return (
        <Carousel className="mt-6 w-[280px] md:w-[480px]">
        <CarouselContent>
            {product.images.map((imgUrl: string) => (
                <CarouselItem key={`product-${imgUrl}`}>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                                <img src={imgUrl} alt={"Product detail"} className='h-[320px] md:h-[480px] relative rounded-xl' />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <div className="" onClick={previousClick}>
            <CarouselPrevious />
        </div>
        <div className="" onClick={nextClick}>
            <CarouselNext />
        </div>
    </Carousel>
    )
}

const ProductPreview: React.FC<CarouselProps> = ({product, setIndex, selectedId}) => {
    return (
        <div className='mt-8 flex'>
            {product.images.map((imgUrl: string, id: number) => {
                return (
                    <div key={`preview-${imgUrl}`} className=''>
                        <img src={imgUrl} alt={"Product preview"} className={`${id == selectedId ? 'blur-none' : 'blur-sm'} object-contain w-[120px] h-[120px] md:w-[200px] md:h-[200px] relative rounded-xl`}/>
                    </div>
                )
            })}
        </div>
    )
}