import { MenuItemType } from '@/lib/interface'
import Link from 'next/link'
import React from 'react'
import Cart from '../ShoppingCart/Cart'
interface MenuProps {
    links: MenuItemType[]
}
export const DesktopMenu: React.FC<MenuProps> = ({links}) => {
  return (
    <>
    <ul className='col-start-1 flex items-center gap-6 md:text-[1.25rem]'>
        {links.map((link: MenuItemType) => {
            return (
                <Link key={link.id} href={link.url} className=''>
                    {link.title}
                </Link>
            )
        })}
        </ul>
        <Link href='/' className='object-fit justify-self-center col-start-2 md:w-36'>
            <img src='/logo.png' alt='Logo' className=''/>
        </Link>
        <Cart/> 
    </>
  )
}

export const MobileMenu: React.FC<MenuProps> = ({links}) => {
    return (
      <div>MobileMenu</div>
    )
  }

