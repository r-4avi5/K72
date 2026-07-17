import React from 'react'
import Projectcard from '../components/projects/Projectcard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Projects() {
  const projects = [{
    image1:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
    image2:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
  },
    {
    image1:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    image2:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
  },
    {
    image1:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    image2:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:'50px',
      stagger:{
        amount:0.3
      },
      scrollTrigger:{ 
        trigger:'.roll',
        start:'top 100%',
        end:'top -150%',
        scrub:true,
      }
    })
  })

  return (
    <div className='lg:p-4 p-2'>
      <div className='pt-[35vh]'>
            <h2 className='font-[font2] lg:text-[14vw] text-8xl tracking-tighter uppercase'>Projets</h2>
        </div>
        <div className='-lg:mt-22 roll'>
          {projects.map(function(elem,idx){
            return  <div key={idx} className='hero w-full lg:h-[500px] mb-4 flex lg:flex-row flex-col gap-2 lg:gap-4'>
            <Projectcard image1={elem.image1} image2={elem.image2}/>
            </div>
          })}
        </div>
    </div>
  )
}

export default Projects