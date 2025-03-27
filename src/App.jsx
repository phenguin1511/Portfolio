import { Suspense } from 'react';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={<div>Loading...</div>}>

        <section className='#home'>
          <Hero />
        </section>
      </Suspense>
      <Suspense fallback={<div></div>}>

        <section className='#services'>
          <Services />
        </section>

      </Suspense>

      <Suspense fallback={<div></div>}>

        <Portfolio />

      </Suspense>

      <Suspense fallback={<div></div>}>

        <section className='#contact'>
          <Contact />
        </section>

      </Suspense>
    </div>
  )
}

export default App