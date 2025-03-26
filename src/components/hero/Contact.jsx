import { motion } from 'framer-motion';



const Contact = () => {
      return (
            <motion.a href="#contact" className="contactLink"

                  animate={{
                        x: [200, 0],
                        opacity: [0, 1]
                  }}
                  transition={{
                        duration: 1
                  }}>
                  <motion.div className="contactButton"
                        animate={{
                              rotate: [0, 360]
                        }}
                        transition={{
                              duration: 10,
                              repeat: Infinity,
                              repeatType: 'linear'
                        }}>
                        <svg viewBox="0 0 200 200" width="150px" height="150px">
                              <circle cx="100" cy="100" r="90" fill="pink" />
                              <path id="innerCirclePath" fill="none" d="M 100, 100 m -60, 0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0" />
                              <text className="circleText">
                                    <textPath href="#innerCirclePath"  >Hire Me</textPath>
                              </text>
                              <text className="circleText">
                                    <textPath href="#innerCirclePath" startOffset="44%">Contact Me</textPath>
                              </text>
                        </svg>
                        <div className="arrow" >
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="50px"
                                    height="50px"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                              >
                                    <line x1="6" y1="18" x2="18" y2="6" />
                                    <polyline points="9 6 18 6 18 15" />
                              </svg>
                        </div>
                  </motion.div>
            </motion.a>
      );
};

export default Contact;
