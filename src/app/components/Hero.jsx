"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Hero = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-pink-600  '>
                        Merhaba,Ben {""}
                        </span>
                        <br />
                        <TypeAnimation
                        sequence={[
                        ' Büşra',
                        1000, 
                        'Bir Frontend Developerım',
                        1000,
                        'Acunmedyada eğitim alıyorum',
                        1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1> 
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Frontend developer olmak üzere eğitim alıyorum. 
                    Gelecekte 3D websiteler ve oyunlar yapmak istiyorum. 
                    Ayrıca bir dijital göçmen olmak istiyorum. 
                    Bu serüvende bana destek olun. 
                     
                </p>
                <div>
                    <Link href="https://www.linkedin.com/in/b%C3%BC%C5%9Fraordu/">
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Linkedin</button>
                    </Link>
                    
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] 
                w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image 
                    src="/images/avatar-Photoroom.png"
                    alt='hero image'
                    className='absolute transform 
                    -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    />
                </div>
            </div>
    </div>
    </section>
  )
}

export default Hero