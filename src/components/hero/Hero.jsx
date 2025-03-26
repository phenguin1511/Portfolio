
import './hero.css';
import Speech from './Speech';
import { motion } from 'framer-motion';
import Title from './Title';
import Award from './Award';
import Follow from './Follow';
import Contact from './Contact';
import Shape from './Shape';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';


const certificateVariants = {
      initial: { opacity: 0, y: 75 },
      animate: {
            opacity: 1,
            y: 0,
            transition: {
                  duration: 1,
                  staggerChildren: 0.5
            }
      },
};
const Hero = () => {
      return (
            <div className="hero">
                  <div className="hSection left">
                        {/** Title */}
                        <Title />
                        {/** Awards */}
                        <Award />
                        {/** Scroll SVG */}
                        <motion.a href="#services" className="scroll"
                              animate={{
                                    y: [0, 5],
                                    opacity: [0, 1]
                              }}
                              transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                              }}>
                              <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9L12 16L19 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                        </motion.a>
                  </div>
                  <div className="hSection right">
                        {/** Follow me */}
                        <Follow />

                        {/** Bubble */}
                        <Speech />
                        {/** Certificate */}
                        <motion.div className="certificate"
                              initial="initial"
                              animate="animate"
                              variants={certificateVariants}>
                              <motion.img variants={certificateVariants} src="certificate.png" alt="certificate" />
                              <motion.p variants={certificateVariants}>
                                    BACKEND DEVELOPER
                              </motion.p>
                              <motion.p variants={certificateVariants}>
                                    FRONTEND DEVELOPER
                              </motion.p>
                              <motion.p variants={certificateVariants}>
                                    GREAT GRADUATED
                              </motion.p>
                        </motion.div>
                        {/** CONTACT BUTTON */}
                        <Contact />
                  </div>
                  <div className="bg">

                        {/** 3D Background */}
                        <Canvas>
                              <Suspense fallback={<span>...loading</span>}>
                                    <Shape />
                              </Suspense>
                        </Canvas>
                        <div className="himg">
                              <img src="/hero.png" alt="bg" />
                        </div>

                  </div>
            </div>
      );
};
export default Hero;
