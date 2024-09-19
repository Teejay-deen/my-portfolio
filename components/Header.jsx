import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto'>
            <Link href="/">
            <h1 className='text-4xl font-semibold text-emerald-500'>Teejay <span className='text-accent'>.</span></h1>
            </Link>
        </div>
    </header>
  )
}

export default Header