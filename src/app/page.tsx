import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import {CheckIcon} from 'lucide-react'

const pricingTiers = [
  {
    name: "Basic",
    price: { monthly: 99, yearly: 999 },
    description: "Great for small businesses looking to establish an online presence.",
    features: [
      { name: "Custom Design", description: "Unique website tailored to your brand.", included: true },
      { name: "SEO Optimization", description: "Basic on-page SEO for better visibility.", included: true },
      { name: "Hosting Setup", description: "Assistance with hosting configuration.", included: true },
      { name: "Support", description: "Email support for minor issues.", included: false },
    ],
    highlight: false,
    badge: "",
    icon: <CheckIcon className="w-6 h-6" />,
  },
  {
    name: "Pro",
    price: { monthly: 199, yearly: 1999 },
    description: "Ideal for growing businesses needing advanced features.",
    features: [
      { name: "Everything in Basic", description: "Includes all features from the Basic plan.", included: true },
      { name: "E-commerce Support", description: "Sell products online with ease.", included: true },
      { name: "Advanced SEO", description: "Better rankings with advanced SEO techniques.", included: true },
      { name: "Priority Support", description: "Faster response times for your queries.", included: true },
    ],
    highlight: true,
    badge: "Most Popular",
    icon: <CheckIcon className="w-6 h-6" />,
  },
  {
    name: "Enterprise",
    price: { monthly: 499, yearly: 4999 },
    description: "For large-scale businesses requiring a custom solution.",
    features: [
      { name: "Everything in Pro", description: "Includes all features from the Pro plan.", included: true },
      { name: "Custom Web App", description: "Tailor-made web applications.", included: true },
      { name: "24/7 Dedicated Support", description: "Around-the-clock technical assistance.", included: true },
      { name: "Performance Optimization", description: "Ensure fast loading times and reliability.", included: true },
    ],
    highlight: true,
    badge: "Best Value",
    icon: <CheckIcon className="w-6 h-6" />,
  },
];

const testimonialsData = [
  {
    image: "/avatars/user1.jpg",
    name: "Jane Doe",
    username: "@janedoe",
    text: "Apollo Studios transformed our business website! Their designs are sleek, modern, and highly functional.",
    social: "https://twitter.com/janedoe",
  },
  {
    image: "/avatars/user2.jpg",
    name: "John Smith",
    username: "@johnsmith",
    text: "Super professional team! Our website runs smoothly, and their support is top-notch.",
    social: "https://twitter.com/johnsmith",
  },
  {
    image: "/avatars/user3.jpg",
    name: "Alice Brown",
    username: "@alicebrown",
    text: "Highly recommend Apollo Studios! They exceeded our expectations and delivered on time.",
    social: "https://twitter.com/alicebrown",
  },
  {
    image: "/avatars/user4.jpg",
    name: "Michael Johnson",
    username: "@michaelj",
    text: "The best web dev agency we’ve worked with. Their attention to detail is unmatched!",
    social: "https://twitter.com/michaelj",
  },
  {
    image: "/avatars/user5.jpg",
    name: "Emily White",
    username: "@emilywhite",
    text: "Our website now attracts more customers thanks to Apollo Studios. Amazing experience!",
    social: "https://twitter.com/emilywhite",
  },
  {
    image: "/avatars/user6.jpg",
    name: "David Lee",
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

    <Pricing tiers={pricingTiers} />

    </>
  );    
}
