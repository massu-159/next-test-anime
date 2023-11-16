import { PlusIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Contact = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-24 pt-32">
      <h2 className="mb-3">03 -- Contact</h2>
      <p className="mb-6 max-w-3xl">We welcome detailed information requests about our technology and services, demo requests, and proposals for partnerships. We are enthusiastic about supporting the growth of your business or projects by providing solutions utilizing the latest VR/AR technology.
      </p>
      <p className="text-gray-400 text-4xl">Please feel free to reach out if you have any questions. Our staff will promptly respond to your inquiries and requests.</p>
      <div className="my-32">
        <Link href={"#"} className='flex justify-center items-center max-w-[320px] mx-auto py-3 border border-green-900 rounded-full'>
          <PlusIcon className='w-7 h-7 text-green-800'></PlusIcon>
          <span>Become a Client</span>
        </Link>
      </div>
    </div>
  )
}

export default Contact