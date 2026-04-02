import { Hero } from '../components/Hero'
import { ValueProps } from '../components/Value-props'
import { AppShowcase } from '../components/App-showcase'
import { PlanYourNight } from '../components/Plan-your-night'
import { FinalCTA } from '../components/Final-cta'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <>

      <Navbar/>
      <Hero />
      <ValueProps />
      <AppShowcase />
      <PlanYourNight />
      <FinalCTA />
    </>
  )
}