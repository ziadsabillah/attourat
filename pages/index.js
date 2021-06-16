import Layout from '../components/Layout'


import ProjectsSection from '../components/Sections/ProjectsSection'
import Testimonials from '../components/Sections/Testimonials'
import VideoSection from '../components/Sections/VideoSection'
import Contact from '../components/Sections/Contact'
import Hero from '../components/Hero'
import CallToActionSection from '../components/Sections/CallToActionSection'

export default function Home() {
  return (
    <Layout title="Atourrate Fès">
      <Hero />
      <VideoSection />
      <ProjectsSection />
      <CallToActionSection />
      {/* <Testimonials /> */}
      <Contact />
    </Layout>
  )
}
