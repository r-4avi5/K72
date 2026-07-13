import React from 'react'
import Video from './Video'

function HomeHeroText() {
  return (
   <div>
     <div className='font-[font1] pt-5 text-center'>
        <div className='text-[8.5vw] flex items-center justify-center uppercase leading-[8.5vw]'>
             L'étincelle
        </div>
        <div className='text-[8.5vw] flex items-center justify-center uppercase leading-[8.5vw]'>
             qui
          <div className='h-[7vw] w-[15vw] rounded-full -mt-4.5 p-0.5 overflow-hidden'>
             <Video/>
          </div>
          génère
        </div>
        <div className='text-[8.5vw] flex items-center justify-center uppercase leading-[8.5vw]'>
           la créativité
        </div>
    </div>
  <div className="absolute right-6 text-left indent-19 text-sm bottom-34 w-[22vw]">
  <p className="text-white font-semibold text-[1vw] leading-[1.3] tracking-tight">
    K72 est une agence qui pense <br /> chaque action pour nourrir la marque. Demain, <br /> dans
     5 mois et dans 5 ans. On cherche la <br /> friction qui crée l’étincelle pour générer 
     de <br /> l’émotion. Pour assurer une relation honnête, <br /> on est sans filtre, on dit ce 
     qui doit être dit, on <br /> fait ce qui doit être fait.
  </p>
</div>
   </div>  
  )
}

export default HomeHeroText