import React from 'react'
import { THouseCard } from '../types'

export default function HouseCard({name, animal, founder, houseColours}: THouseCard) {
  return (
    <div className="px-6 pt-[22px] pb-[26px] shadow-lg rounded-[10px]">
        {/* top */}
        <div className="flex justify-between">
            <h3 className="font-bold text-[30px]">{name}</h3>
            <p className="text-[20px] font-normal">{animal}</p>
        </div>
        {/* middle */}
        <div className="w-[508px] h-[26px] rounded-[5px] bg-red-500 mt-[11px] mb-[10px]" style={{
            backgroundImage: `linear-gradient(to right, ${houseColours[0]} ,${houseColours[1]}  )`
        }}></div>
        {/* bottom */}
        <p className="text-[20px] font-bold">
            <span className="font-normal">Founder: {"  "}</span>
           {founder}
        </p>
    </div>
  )
}
