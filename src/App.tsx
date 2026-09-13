import { FeaturesSection } from './components/FeaturesSection'
import { FinalCallToAction } from './components/FinalCallToAction'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { LocalFirstSection } from './components/LocalFirstSection'
import { ResponsibleUseSection } from './components/ResponsibleUseSection'
import { WorkflowSection } from './components/WorkflowSection'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <LocalFirstSection />
        <ResponsibleUseSection />
        <FinalCallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
