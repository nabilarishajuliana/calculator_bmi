import React from 'react'
import { GiBodyBalance } from "react-icons/gi";
import { MdOutlineSick } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { IoTrendingUpSharp } from "react-icons/io5";
import { BsHeartPulse } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";




function Benefit() {
  return (
    <>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Benefit
          </p> */}
        </div>
        <h2 className="max-w-lg mb-2   font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            {/* <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d9d7687a-355f-4502-8ec4-7945db034688"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                width="52"
                height="24"
              />
            </svg> */}
          </span >{' '}
          <span className="text-orange-500">Manfaat</span> Gizi seimbang 
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Dalam mengonsumsi makanan yang bergizi, kita perlu tahu seperti apa manfaatnya untuk tubuh. Yuk, simak seberapa besar manfaat gizi untuk tubuh manusia!
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 text-orange-500">
            <IoTrendingUpSharp/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Pertumbuhan dan perkembangan</h6>
          <p className="text-sm text-gray-900">
          Gizi yang cukup membantu dalam pertumbuhan dan perkembangan sel-sel tubuh, otot, tulang, dan organ dalam tubuh. </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 text-orange-500">
            <RiEyeCloseLine/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Menjaga kesehatan kulit dan rambut</h6>
          <p className="text-sm text-gray-900">
          Asupan gizi yang cukup dapat membantu menjaga kesehatan kulit dan rambut. Kekurangan beberapa nutrisi tertentu, seperti vitamin C dan zat besi, dapat menyebabkan rambut dan kulit kering dan kusam.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 text-orange-500">
            <GiBodyBalance/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Meningkatkan daya tahan tubuh</h6>
          <p className="text-sm text-gray-900">
          Nutrisi seperti vitamin C, vitamin E, dan seng membantu meningkatkan daya tahan tubuh terhadap penyakit dan infeksi.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 text-orange-500">
            <BsHeartPulse/>
          </div>
          <h6 className="mb-2 font-semibold leading-5"> Mengoptimalkan fungsi organ</h6>
          <p className="text-sm text-gray-900">
          Nutrisi yang dibutuhkan oleh organ dalam tubuh, seperti vitamin A untuk mata, kalsium untuk tulang, dan omega-3 untuk otak, membantu dalam mengoptimalkan fungsi organ tersebut.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 text-orange-500">
            <SlEnergy/>
            
          </div>
          <h6 className="mb-2 font-semibold leading-5"> Meningkatkan energi</h6>
          <p className="text-sm text-gray-900">
          Makanan yang kaya nutrisi membantu meningkatkan energi dan stamina untuk melakukan aktivitas sehari-hari.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 text-orange-500">
            <MdOutlineSick/>
          </div>
          <h6 className="mb-2 font-semibold leading-5"> Mencegah penyakit kronis</h6>
          <p className="text-sm text-gray-900">
          Asupan gizi yang cukup dapat membantu mencegah berbagai penyakit kronis, seperti penyakit jantung, diabetes, dan kanker. Nutrisi seperti serat, antioksidan, dan asam lemak omega-3 telah terbukti dapat membantu mencegah penyakit ini.
          </p>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Benefit