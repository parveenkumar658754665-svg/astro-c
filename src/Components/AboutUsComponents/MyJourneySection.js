import React from 'react'

const MyJourneySection = () => {
  return (
    <section class="bg-black text-white bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-cover bg-center py-16 px-6 md:px-20">
  <div class="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">


    <div class="flex-1">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-serif text-[#c39c6b] text-center mb-6 leading-tight">
        My Journey into Astrology
      </h2>
      <p class="text-base md:text-lg text-gray-200 mb-4 font-mono text-center">
        Ever since I was a child, I was deeply fascinated by the sky — the movement of the moon, the stars, and the mysterious connection between time, energy, and life events. As I grew older, this fascination turned into a calling. I realized that astrology isn’t just about predictions; it’s a sacred tool for healing, transformation, and empowerment.
      </p>
      <br/>
      <div className='w-full border-[1px]'>

      </div>
      <br/>
      <p class="text-base md:text-lg text-gray-200 font-mono text-center ">
        I started my journey under the guidance of experienced gurus and learned the core principles of Vedic astrology and horoscope analysis. Over time, I blended traditional wisdom with intuitive insight, creating a system that is accurate, compassionate, and practical.
      </p>
    </div>


    {/* <div class="flex-1 relative w-full max-w-sm md:max-w-md">
      <img
        src="https://i.imgur.com/TnZdAGJ.jpg" 
        alt="Astrologer Portrait"
        class="rounded-2xl w-full object-cover shadow-xl"
      />
      <div class="absolute top-[-12px] left-[-10px] text-4xl text-[#c39c6b]">✨</div>
      <div class="absolute bottom-[-20px] right-[-12px] text-3xl">🌌</div>
    </div> */}

  </div>
</section>

  )
}

export default MyJourneySection