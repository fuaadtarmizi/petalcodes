import React from 'react'
import Image from 'next/image'
import Slidernfc from '@/components/Slidernfc'

function page() {
  return (
  
    <main>
      <>
      <div className="w-full flex justify-center">
      <div className="max-w-screen-sm">
      <div className="container bg-green-300">
      <div className="w-full flex justify-center">
      <section>
      <div className="mx-auto overflow-hidden">
        <Image 
            className="w-full"
            src="/first.png"
            alt="first"
            width="1800"
            height="800"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      </div>
      <section className="px-7" style={{background:'#00203FFF'}}>
        <div className="py-8" style={{background:'#00203FFF'}}>
          <div>
            <div className="py-4">
              <p className="text-4xl font-semibold" style={{color:'#F4C095'}}>FUAAD TARMIZI</p>
            </div>
            <div className="">
              <p className="text-base font-semibold font-sans" style={{color:'#FFF4D5'}}>IT DEVELOPER</p>
            </div>
            <div className="py-1">
              <p className="text-base font-semibold font-sans" style={{color:'#FFF4D5'}}>PETALCODE LABS</p>
            </div>
          </div>
          <div className="pt-10 py-6">
          <p className="" style={{color:'#FFF4D5'}}>Design your life journey with the technology of the future.</p>
        </div>
        <section>
          <div className="flex space-x-6">
            <a href="https://wa.me/60143496015">
              <div className="w-full rounded-full p-1" style={{background:'#4F6367'}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 24 24" style={{fill:'#F4C095'}} ><path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path></svg>
              </div></a>
            <a href="https://www.tiktok.com/@fuaadtarmizi">
              <div className="w-full rounded-full p-1" style={{background:'#4F6367'}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 24 24" style={{fill:"#F4C095"}}><path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path></svg>
              </div></a>
            <a href="https://www.instagram.com/fuaadtarmizi/">
              <div className="w-full rounded-full p-1" style={{background:'#4F6367'}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 24 24" style={{fill:"#F4C095"}}><path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path></svg>
              </div></a>
            <a href="https://www.petalcode.com/">
              <div className="w-full rounded-full p-1" style={{background:'#4F6367'}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 24 24" style={{fill:"#F4C095"}}><path d="M 12 2 C 8.728 2 5.8318125 3.5778125 4.0078125 6.0078125 L 7.6269531 9.6269531 C 8.4739531 8.0699531 10.103 7 12 7 C 13.118 7 14.139656 7.38 14.972656 8 L 21 8 L 16.474609 9.8105469 C 16.800609 10.474547 17 11.211 17 12 C 17 13.643 16.195656 15.089 14.972656 16 L 15 16 L 11.033203 21.951172 C 11.351203 21.982172 11.673 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 4.0058594 6.0117188 C 2.7528594 7.6827188 2 9.75 2 12 C 2 17.191 5.9565781 21.455219 11.017578 21.949219 L 12.689453 16.929688 C 12.461453 16.961688 12.236 17 12 17 C 9.239 17 7 14.761 7 12 L 4.0058594 6.0117188 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path></svg>
              </div></a>
          </div>
        </section>
        <section>
          <div className="py-14">
          <div className="flex items-center">
            <p className="text-white text-2xl font-semibold py-2" style={{color:'#F4C095'}}>CONTACT </p><svg width="100"height="30"viewBox="0 0 200 100"fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0" y1="50" x2="300" y2="50" stroke="#F4C095" strokeWidth="2"/></svg>
          </div>
          <div className="grid p-5 space-y-3">
            <div className="flex space-x-2 ">
                <div >
                <a href="tel:+60143496015">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.71 16.29l-4.6-4.6a1 1 0 00-1.42 0L13 15.36a1 1 0 01-1.12.24 11.36 11.36 0 01-4.15-2.62A11.36 11.36 0 015 8.48a1 1 0 01.24-1.12L8.31 4.3a1 1 0 000-1.42l-4.6-4.6A1 1 0 002.3 0H1A1 1 0 000 1v3a16.07 16.07 0 004.72 11.27A16.07 16.07 0 0016 20.72h3a1 1 0 001-1v-1.3a1 1 0 00-.29-.71z" 
                  fill="#F4C095"/></svg></a>
                </div>
                <div className="flex items-center"><p className="font-semibold" style={{color:'#FFF4D5'}}>014-349 6015</p></div>
            </div>
            <div className="flex space-x-2">
                <div>
                <a href="mailto:fuaadtarmizi@gmail.com">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.5v15a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5H4.5A1.5 1.5 0 003 4.5zm1.5 0h15v2.68l-7.3 7.3a1.5 1.5 0 01-2.12 0L4.5 7.18V4.5z" 
                    fill="#F4C095"/></svg></a>
                </div>
                <div className="flex items-center"><p className="font-semibold" style={{color:'#FFF4D5'}}>fuaadtarmizi@gmail.com</p></div>
            </div>
            <div className="flex space-x-2">
                <div>
                <a href="https://maps.app.goo.gl/WfhHskZKVyQsjg6R6">
                <div><svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" 
                fill="#F4C095"/></svg></div></a>
                </div>
                <div className="flex items-center"><p className="font-semibold" style={{color:'#FFF4D5'}}>Damansara, Selangor</p></div>
            </div> 
            </div>
            </div>
        </section>
        <section>
          <div className="flex items-center pb-8">
              <p className="text-white text-2xl font-semibold" style={{color:'#F4C095'}}>SERVICES</p><svg width="100"height="30"viewBox="0 0 200 100"fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0" y1="50" x2="300" y2="50" stroke="#F4C095" strokeWidth="2"/></svg>
            </div>
            <section>
              <div className="grid grid-cols-2 gap-8">
                <div className="border border-white rounded-md p-4" style={{background:'#4F6367'}}>
                <div className="py-2 flex justify-center">
                  <Image 
                    className=""
                    src="/nfc.svg"
                    alt="nfc"
                    width="90"
                    height="20"
                    style={{
                      objectFit: "contain",
                    }}/>
                </div>
                <div className="py-2 flex justify-center">
                  <p className="font-semibold" style={{color:'#FFF4D5'}}>NFC Business Card</p>
                </div>
                <div className="py-2 flex justify-center">
                  <p className="text-white text-center">Make a personalized NFC business card for your company's needs.</p>
                </div>
                </div>
                <div className="border border-white rounded-md p-4" style={{background:'#4F6367'}}>
                <div className="py-5 flex justify-center">
                  <Image 
                    className=""
                    src="/webnfc.svg"
                    alt="webnfc"
                    width="80"
                    height="20"
                    style={{
                      objectFit: "contain",
                    }}/>
                </div>
                <div className="py-2 flex justify-center">
                  <p className="font-semibold" style={{color:'#FFF4D5'}}>Web Systems Developer</p>
                </div>
                <div className="py-2 flex justify-center">
                  <p className="text-white text-center">Design your own personal business or branding website for your business.</p>
                </div>
                </div>
              </div>
            </section>
        </section>
        </div>
        <section>
          <div className="flex items-center pb-8">
            <p className="text-white text-2xl font-semibold" style={{color:'#F4C095'}}>TESTIMONIALS</p><svg width="100"height="30"viewBox="0 0 200 100"fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0" y1="50" x2="300" y2="50" stroke="#F4C095" strokeWidth="2"/></svg>
          </div>
          <div className="py-8">
            <Slidernfc/>
          </div>
        </section>
        
      
      </section>
      
      </div>
      </div>
      </div>
      </>
    </main>
  )
}
export default page