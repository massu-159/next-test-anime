import { Bars3BottomRightIcon, PlusIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className="absolute z-20 mt-4 px-12 flex items-center gap-40">
      <Link href={"#"} className='mb-2'>
        <Image src="/vercel.svg" alt="logo" width={100} height={100} />
      </Link>
      <div className='flex justify-evenly items-strech  h-12 w-[480px] ml-1/2 font-semibold border-b border-white border-opacity-60'>
        <Link href={"#"} className='flex items-center px-3 cursor-pointer border-b border-transparent transition duration-500 ease hover:border-white hover:text-green-900'>
          Home
        </Link>
        <Link href={"#"} className='flex items-center px-3 cursor-pointer border-b border-transparent transition duration-500 ease hover:border-white hover:text-green-900'>
          About
        </Link>
        <Link href={"#"} className='flex items-center px-3 cursor-pointer border-b border-transparent transition duration-500 ease hover:border-white hover:text-green-900'>
          Products
        </Link>
        <Link href={"#"} className='flex items-center px-3 cursor-pointer border-b border-transparent transition duration-500 ease hover:border-white hover:text-green-900'>
          Contact
        </Link>
      </div>
      <div className='fixed right-12 flex'>
        <div className='flex justify-evenly items-center bg-white h-14 w-[200px] mt-2 mr-4 rounded-full'>
          <Link href={"#"} className='flex justify-center items-center'>
            <PlusIcon className='w-7 h-7 text-green-800'></PlusIcon>
            <span>Become a Client</span>
          </Link>
        </div>
        <Link href={"#"} className='rounded-full bg-white bg-opacity-60 w-16 h-16 flex justify-center items-center cursor-pointer'>
          <Bars3BottomRightIcon className='text-green-800 w-8 h-8'></Bars3BottomRightIcon>
        </Link>
      </div>
    </div>
  )
}

export default Navigation