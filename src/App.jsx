import { lazy, Suspense } from 'react';
import LazyLoad from 'react-lazyload';
const Hero = lazy(() => import('./components/hero/Hero'));
const Services = lazy(() => import('./components/services/Services'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const Contact = lazy(() => import('./components/contact/Contact'));

const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad height={100} offset={-100} >
          <section className='#home'>
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={<div></div>}>
        <LazyLoad height={100} offset={-100} >
          <section className='#services'>
            <Services />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={<div></div>}>
        <LazyLoad height={600} offset={-100} >
          <Portfolio />
        </LazyLoad>
      </Suspense>

      <Suspense fallback={<div></div>}>
        <LazyLoad height={100} offset={-100} >
          <section className='#contact'>
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  )
}

export default App