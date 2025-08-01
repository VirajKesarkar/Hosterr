

const Body = () => {
  return (
    <div className='lg:flex'>

    <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end lg:overflow-hidden'>
      <img src="./rs/Blue-Shape.svg" alt="img1" className='h-64 -rotate-45 md:h-72 lg:h-[450px] lg:overflow-hidden'/>
      <img src="./rs/Pink-Shape.svg" alt="img2" className='absolute h-64 -rotate-[30deg]  md:h-72 lg:h-[450px] lg:overflow-hidden'/>
      <img src="./rs/Purple-Shape.svg" alt="img3" className='absolute h-64 -rotate-[15deg]  md:h-72 lg:h-[450px] lg:overflow-hidden'/>
      <img src="./rs/Hero-Model.png" alt="hero" className='absolute h-64  md:h-72 lg:h-[450px] lg:overflow-hidden'/>
    </div>
    <div className='space-y-4 lg:flex-1 lg:order-1 lg:space-y-10'>
      <h1 className='text-5xl font-bold leading-tight font-playfair '>Host your website in less than 5 minutes</h1>
      <p className='font-lato text-gray-400'>With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
      <form action="" className='flex flex-col gap-4 md:flex-row'>
        <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='Enter e-mail address' />
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
      </form>
      <div className='flex gap-2'>
        <img src="./rs/Checkmark.svg" alt="lg" />
        <p className='font-lato text-gray-400'>No spam ,ever . Unsubscribe anytime</p>
      </div>
    </div>
    </div>
  )
}

export default Body