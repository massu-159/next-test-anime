import Navigation from '../components/navigation'
import Top from '../components/sections/top'
import Products from '../components/sections/products'
import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <main>
        <Navigation />
        <Top />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
