"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Yetenekler",
        id:"yetenekler",
        content: (
            <ul className='list-disc pl-2'>
                <li>Html/Css</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Eğitim",
        id:"eğitim",
        content: (
            <ul className='list-disc pl-2'>
                <li>Lise: Bilişim teknolojileri</li>
                <li>Önlisans: Bilgisayar Programcılığı</li>
                <li>Kurs: Acunmedya Akademi Frontend Uzmanlık Eğitimi</li>
            </ul>
        )
    },
    {
        title: "Deneyim",
        id:"deneyim",
        content: (
            <ul className='list-disc pl-2'>
                <li>Staj yapmadı</li>
            </ul>
        )
    }
]

const About = () => {
    const[tab,setTab] = useState("yetenekler");
    const[isPending,startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);

        })
    }
  return (
    <section className='text-white'> 
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/kediy.png" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>Hakkımda</h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Aut ad et quam ullam omnis nesciunt veniam inventore 
                    necessitatibus ipsa temporibus, atque asperiores, animi 
                    perspiciatis veritatis itaque placeat vero sed id?

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Aut ad et quam ullam omnis nesciunt veniam inventore 
                    necessitatibus ipsa temporibus, atque asperiores, animi 
                    perspiciatis veritatis itaque placeat vero sed id?
                </p> 
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                    selectTab = {() => handleTabChange("yetenekler")} 
                    active = {tab === "yetenekler"}
                    > 
                    {" "}
                    Yetenekler{" "}
                    </TabButton>
                    <TabButton 
                    selectTab = {() => handleTabChange("eğitim")} 
                    active = {tab === "eğitim"}
                    > 
                    {" "}
                    Eğitim{" "}
                    </TabButton>

                    <TabButton 
                    selectTab = {() => handleTabChange("deneyim")} 
                    active = {tab === "deneyim"}
                    > 
                    {" "}
                    Deneyim{" "}
                    </TabButton>

                    {/* <span 
                    className='mr-3 font-semibold hover:text-white 
                    text-[#ADB7BE] border-b border-purple-500'>
                        Yetenekler
                    </span>
                    <span>Eğitim</span>
                    <span>Deneyimler</span> */}
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About