import './services.css';
import Counter from './Counter';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import RobotComponent from './robot/RobotComponent';
import LaptopComponent from './computer/LaptopComponent';
import ArsenalComponent from './arsenal/ArsenalComponent';
const textVariants = {
      initial: {
            x: -100,
            y: -100,
            opacity: 0
      },
      animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                  duration: 1,
            }
      }
}

const listVariants = {
      initial: {
            x: -100,
            opacity: 0
      },
      animate: {
            x: 0,
            opacity: 1,
            transition: {
                  duration: 1,
                  staggerChildren: 0.5
            }
      }
}


const services = [
      {
            id: 1,
            img: "/service1.png",
            title: "Web Development",
            counter: "7"
      },
      {
            id: 2,
            img: "/service2.png",
            title: "Product Design",
            counter: "8"
      },
      {
            id: 3,
            img: "/service3.png",
            title: "Mobile Development",
            counter: "1"
      },

]


const componentVariants = {
      initial: {
            opacity: 0,
            x: 100
      },
      animate: {
            opacity: 1,
            x: 0,
            transition: {
                  duration: 1,
                  ease: "easeInOut"
            }
      }
}
const Services = () => {
      const [currentServiceId, setCurrentServiceId] = useState(1);
      const ref = useRef(null);
      const isInView = useInView(ref, { margin: "-200px" });
      return (
            <div className="services" ref={ref}>
                  <div className="sSection left">
                        <motion.h1
                              className='sTitle'
                              variants={textVariants}
                              initial="initial"
                              animate={isInView ? "animate" : "initial"}>How Do I Help You?</motion.h1>
                        <motion.div
                              className="servicesList"
                              variants={listVariants}
                              initial="initial"
                              animate={isInView ? "animate" : "initial"}>
                              {services.map(service => (
                                    <motion.div onClick={() => setCurrentServiceId(service.id)} className="service" key={service.id} variants={listVariants}>
                                          <div className="serviceIcon">
                                                <img src={service.img} alt="" />
                                          </div>
                                          <div className="serviceInfo">
                                                <h2 >{service.title}</h2>
                                                <p >{service.counter}</p>
                                          </div>
                                    </motion.div>
                              ))}
                        </motion.div>
                        <div className="counterList">
                              <Counter from={0} to={4} text="Projects Completed" />
                              <Counter from={0} to={72} text="Happy Clients" />
                        </div>
                  </div>
                  <motion.div className="sSection right"
                        variants={componentVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}>
                        {currentServiceId === 1 && <LaptopComponent />}
                        {currentServiceId === 2 && <RobotComponent />}
                        {currentServiceId === 3 && <ArsenalComponent />}
                  </motion.div>
            </div>
      )
}

export default Services;
