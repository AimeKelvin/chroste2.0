import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'

import {CheckIcon} from 'lucide-react'

  
  const testimonialsData = [
    {
      image: "/st4.jpeg",
      name: "Drake Doe",
      username: "@janedoe",
      text: "Apollo Studios transformed our business website! Their designs are sleek, modern, and highly functional.",
      social: "https://twitter.com/janedoe",
    },
    {
      image: "/test2.jpeg",
      name: "Alice Brown",
      username: "@johnsmith",
      text: "Super professional team! Our website runs smoothly, and their support is top-notch.",
      social: "https://twitter.com/johnsmith",
    },
    {
      image: "/test3.jpeg",
      name: "The Antman coorporation",
      username: "@alicebrown",
      text: "Highly recommend Apollo Studios! They exceeded our expectations and delivered on time.",
      social: "https://twitter.com/alicebrown",
    },
    {
      image: "/test5.jpeg",
      name: "Michael Johnson",
      username: "@michaelj",
      text: "The best web dev agency we’ve worked with. Their attention to detail is unmatched!",
      social: "https://twitter.com/michaelj",
    },
    {
      image: "/test6.jpeg",
      name: "Blake",
      username: "@emilywhite",
      text: "Our website now attracts more customers thanks to Apollo Studios. Amazing experience!",
      social: "https://twitter.com/emilywhite",
    },
    {
      image: "/testimony.jpeg",
      name: "Lisae Lee",
      username: "@davidlee",
      text: "Clean UI, great performance, and a fantastic team. Will work with them again!",
      social: "https://twitter.com/davidlee",
    },
  ]




export default function Home() {
  return (
    <>
    <Hero/>
    <Services/>
    <Projects/>
    <Testimonials testimonials={testimonialsData} />
    <Pricing />
   
    </>
  );    
}
