export default function Home() {
  return (
    <div className="bg-white grid">
      <div className="mx-auto mt-24 relative w-[800px] h-[453px] rounded-3xl bg-black">
      <video src="/top.mp4" className='w-full h-full z-10 rounded-3xl' autoPlay loop muted playsInline></video>
        {/* 左上 */}
        <div className="absolute top-0  w-[120px] h-[60px] bg-white rounded-br-3xl">
          <div className="before:absolute before:top-full before:h-[30px] before:w-[30px] before:bg-white"></div>
          <div className="after:absolute after:top-full after:h-[30px] after:w-[30px] after:backdrop-blur-2xl after:bg-black after:rounded-tl-full"></div>
          <div className="before:absolute before:left-full before:top-0 before:h-[30px] before:w-[30px] before:bg-white"></div>
          <div className="after:absolute after:left-full after:top-0 after:h-[30px] after:w-[30px] after:backdrop-blur-2xl after:bg-[#13191d] after:rounded-tl-full"></div>
        </div>
        {/* 左下 */}
        <div className="absolute bottom-0  w-[300px] h-[100px] bg-white rounded-tr-3xl">
          <h2>Create an abstraction</h2>
          <div className="before:absolute before:bottom-full before:h-[30px] before:w-[30px] before:bg-white"></div>
          <div className="after:absolute after:bottom-full after:h-[30px] after:w-[30px] after:backdrop-blur-2xl after:bg-black after:rounded-bl-full"></div>
          <div className="before:absolute before:left-full before:bottom-0 before:h-[30px] before:w-[30px] before:bg-white"></div>
          <div className="after:absolute after:left-full after:bottom-0 after:h-[30px] after:w-[30px] after:backdrop-blur-2xl after:bg-black after:rounded-bl-full"></div>
        </div>
      </div>
    </div>
  )
}