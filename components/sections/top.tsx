import { CodeBracketIcon, CubeTransparentIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const Top = () => {
  return (
    <div className="mx-6 mt-2 -z-10">
      <div className='relative'>
        {/* 左上 */}
        <div className='absolute left-0 top-0 w-[160px] h-16 bg-white rounded-br-3xl'>
          <div className="absolute bottom-0 right-full h-[30px] w-[30px]"></div>
          <div className="before:absolute before:top-0 before:left-full before:h-[40px] before:w-[40px] before:shadow-round-tl before:rounded-full"></div>
          <div className="before:absolute before:top-full before:left-0 before:h-[40px] before:w-[40px] before:shadow-round-tl before:rounded-full"></div>
        </div>

        {/* 左下 */}
        <div className='absolute left-12 bottom-[300px] w-16 h-16 bg-yellow-200 bg-opacity-40 backdrop-blur-md rounded-full p-4'>
          <CubeTransparentIcon className='w-8 h-8'></CubeTransparentIcon>
        </div>
        <div className='absolute left-32 bottom-[300px] w-16 h-16 bg-cyan-200 bg-opacity-40 backdrop-blur-md rounded-full  p-4'>
          <RocketLaunchIcon className='w-8 h-8'></RocketLaunchIcon>
        </div>
        <div className='absolute left-52 bottom-[300px] w-16 h-16 bg-emerald-200 bg-opacity-40 backdrop-blur-md rounded-full  p-4'>
          <CodeBracketIcon className='w-8 h-8'></CodeBracketIcon>
        </div>
        <div className='absolute left-12 bottom-12 w-96 h-60 bg-white rounded-3xl bg-opacity-40 backdrop-blur-md p-4'>
          <h2 className='text-3xl my-3'>unti deluxe</h2>
          <p>We excel in VR and AR solutions, offering custom development services and expert consultancy. Our focus on innovation reshapes industries, crafting immersive experiences and guiding businesses toward strategic implementation for impactful results.</p>
        </div>

        {/* 右下 */}
        <div className='absolute right-[600px] bottom-36 w-28 h-12 bg-white rounded-3xl bg-opacity-70 backdrop-blur-md p-2'>
          <p className='flex justify-center items-center text-lg text-green-900'>virtual</p>
        </div>
        <div className='absolute right-[480px] bottom-36 w-28 h-12 bg-white rounded-3xl bg-opacity-70 backdrop-blur-md p-2'>
          <p className='flex justify-center items-center text-lg text-green-900'>augment</p>
        </div>
        <div className='absolute right-0 bottom-32 w-[360px] h-32 bg-white rounded-tl-3xl'>
          <div className="absolute bottom-0 right-full h-[30px] w-[30px]"></div>
          <div className="before:absolute before:bottom-0 before:right-full before:h-[60px] before:w-[60px]  before:shadow-round-br before:rounded-full"></div>
          <div className="before:absolute before:bottom-full before:right-0 before:h-[60px] before:w-[60px] before:shadow-round-br before:rounded-full"></div>
          <div className="pt-3 pr-6 text-end text-8xl">
            <p>Create</p>
          </div>
        </div>
        <div className='absolute right-0 bottom-0 w-[720px] h-32 bg-white rounded-tl-3xl'>
          <div className="absolute bottom-0 right-full h-[30px] w-[30px]"></div>
          <div className="before:absolute before:bottom-0 before:right-full before:h-[60px] before:w-[60px]  before:shadow-round-br before:rounded-full"></div>
          <div className="before:absolute before:bottom-full before:right-0 before:h-[60px] before:w-[60px] before:shadow-round-br before:rounded-full"></div>
          <div className="pt-3 pr-6 text-end text-8xl">
            <p>an Abstraction</p>
          </div>
        </div>

        {/* 動画 */}
        <video src="/top-home.webm" className='w-screen rounded-3xl' autoPlay loop muted playsInline></video>
      </div>
    </div>
  )
}

export default Top